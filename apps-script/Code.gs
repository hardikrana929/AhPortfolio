// Google Apps Script – receives the portfolio "Hire Me" form and emails it to you.
// Paste this whole file into script.google.com, then deploy as a Web App (see README).

const TO_EMAIL = "hstudy575@gmail.com";

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);

    // Honeypot: bots fill this hidden field
    if (d.website) return out({ ok: true });

    const clean = (v) => String(v || "").slice(0, 3000).trim();
    const f = {
      company_name: clean(d.company_name),
      contact_person: clean(d.contact_person),
      from_email: clean(d.from_email),
      phone: clean(d.phone),
      position: clean(d.position),
      job_type: clean(d.job_type),
      work_mode: clean(d.work_mode),
      location: clean(d.location),
      salary: clean(d.salary),
      message: clean(d.message),
    };

    ["company_name", "contact_person", "from_email", "position", "message"].forEach((k) => {
      if (!f[k]) throw new Error("Missing field: " + k);
    });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.from_email)) throw new Error("Invalid email");

    const esc = (s) =>
      s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

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
    ]
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px;background:#f1f5ff;width:38%"><b>${k}</b></td><td style="padding:8px">${esc(v) || "-"}</td></tr>`
      )
      .join("");

    const html =
      `<div style="font-family:Arial,sans-serif;max-width:600px">` +
      `<h2 style="color:#2f5bea;margin:0 0 12px">New Hiring Request</h2>` +
      `<table style="width:100%;border-collapse:collapse;font-size:15px">${rows}</table>` +
      `<h3 style="margin:18px 0 6px">Message</h3>` +
      `<p style="white-space:pre-line;font-size:15px;margin:0">${esc(f.message)}</p></div>`;

    MailApp.sendEmail({
      to: TO_EMAIL,
      replyTo: f.from_email, // pressing Reply writes to the company
      name: "Portfolio Hire Form",
      subject: ("New hiring request - " + f.position + " at " + f.company_name).replace(/[\r\n]+/g, " "),
      htmlBody: html,
    });

    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
