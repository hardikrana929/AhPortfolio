// Serverless function (Vercel) – receives the "Hire Me" form and emails it to you
// through your own Gmail account using a Google App Password.
//
// Required environment variables (NEVER put these in the React code):
//   GMAIL_USER          your Gmail address, e.g. hstudy575@gmail.com
//   GMAIL_APP_PASSWORD  the 16-character Google App Password
// Optional:
//   MAIL_TO             where to deliver the mail (defaults to GMAIL_USER)
//   MAIL_DRY_RUN=1      don't send anything, just log the email (for testing)

import nodemailer from "nodemailer";

const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX = 3; // max 3 submissions / minute / IP (best effort, per server instance)
const hits = new Map();

const clean = (v, max = 2000) =>
  String(v ?? "")
    .replace(/\u0000/g, "")
    .trim()
    .slice(0, max);

const oneLine = (v, max = 200) => clean(v, max).replace(/[\r\n]+/g, " ");

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function tooManyRequests(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  return list.length > RATE_MAX;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body || {};

  // Honeypot – real users never fill this hidden field
  if (body.website) return res.status(200).json({ ok: true });

  const ip = String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
  if (tooManyRequests(ip)) {
    return res.status(429).json({ ok: false, error: "Too many requests. Please try again in a minute." });
  }

  const f = {
    company_name: oneLine(body.company_name),
    contact_person: oneLine(body.contact_person),
    from_email: oneLine(body.from_email),
    phone: oneLine(body.phone, 40),
    position: oneLine(body.position),
    job_type: oneLine(body.job_type, 40),
    work_mode: oneLine(body.work_mode, 40),
    location: oneLine(body.location),
    salary: oneLine(body.salary),
    message: clean(body.message, 4000),
  };

  for (const k of ["company_name", "contact_person", "from_email", "position", "message"]) {
    if (!f[k]) return res.status(400).json({ ok: false, error: `Please fill in: ${k.replace("_", " ")}` });
  }
  if (!EMAIL_RE.test(f.from_email)) {
    return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
  }

  const user = process.env.GMAIL_USER;
  const pass = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");
  const dryRun = process.env.MAIL_DRY_RUN === "1";

  if (!dryRun && (!user || !pass)) {
    console.error("GMAIL_USER / GMAIL_APP_PASSWORD are not set", {
      GMAIL_USER_set: Boolean(user),
      GMAIL_APP_PASSWORD_set: Boolean(pass),
    });
    return res
      .status(500)
      .json({ ok: false, code: "NOT_CONFIGURED", error: "Mail service is not configured." });
  }

  const rows = [
    ["Company", f.company_name],
    ["Contact person", f.contact_person],
    ["Email", f.from_email],
    ["Phone", f.phone],
    ["Position", f.position],
    ["Job type", f.job_type],
    ["Work mode", f.work_mode],
    ["Location", f.location],
    ["Salary / Stipend", f.salary],
  ];

  const html =
    `<div style="font-family:Arial,sans-serif;max-width:620px">` +
    `<h2 style="color:#2f5bea;margin:0 0 4px">New Hiring Request</h2>` +
    `<p style="color:#666;margin:0 0 14px">Received from your portfolio website</p>` +
    `<table style="width:100%;border-collapse:collapse;font-size:15px">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px;background:#f1f5ff;width:38%"><b>${k}</b></td><td style="padding:8px">${esc(v) || "-"}</td></tr>`
      )
      .join("") +
    `</table><h3 style="margin:18px 0 6px">Message</h3>` +
    `<p style="white-space:pre-line;font-size:15px;margin:0">${esc(f.message)}</p></div>`;

  const text =
    rows.map(([k, v]) => `${k}: ${v || "-"}`).join("\n") + `\n\nMessage:\n${f.message}`;

  try {
    const transporter = dryRun
      ? nodemailer.createTransport({ jsonTransport: true })
      : nodemailer.createTransport({
          service: "gmail",
          auth: { user, pass },
          // fail fast instead of hanging until the serverless function times out
          connectionTimeout: 10_000,
          greetingTimeout: 10_000,
          socketTimeout: 15_000,
        });

    const info = await transporter.sendMail({
      from: `"Portfolio Hire Form" <${user || "dry-run@example.com"}>`,
      to: process.env.MAIL_TO || user || "dry-run@example.com",
      replyTo: `"${f.contact_person.replace(/"/g, "")}" <${f.from_email}>`, // Reply goes to the company
      subject: `New hiring request - ${f.position} at ${f.company_name}`,
      text,
      html,
    });

    if (dryRun) console.log("[MAIL_DRY_RUN]", info.message);
    return res.status(200).json({ ok: true });
  } catch (err) {
    // Full details go to the server log (Vercel -> Logs). Only a short, non-sensitive code goes to the browser.
    console.error("Mail send failed:", {
      code: err?.code,
      responseCode: err?.responseCode,
      message: err?.message,
    });
    return res.status(500).json({
      ok: false,
      code: err?.code || "SEND_FAILED", // EAUTH = bad login/App Password, ETIMEDOUT/ESOCKET = network
      error: "Could not send the message. Please try again later.",
    });
  }
}

function safeParse(s) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}