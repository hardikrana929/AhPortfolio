import { useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { profile } from "../data.js";

const empty = {
  company_name: "",
  contact_person: "",
  from_email: "",
  phone: "",
  position: "",
  job_type: "",
  work_mode: "",
  location: "",
  salary: "",
  message: "",
  website: "", // honeypot – must stay empty
};

const label = "grid gap-1.5 text-sm font-semibold";
const row = "grid gap-4 sm:grid-cols-2";

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: "idle", msg: "" });
  const lastSent = useRef(0);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.website) return; // bot
    if (Date.now() - lastSent.current < 30000) {
      setStatus({ type: "error", msg: "Please wait a few seconds before sending again." });
      return;
    }

    setStatus({ type: "loading", msg: "Sending…" });
    try {
      // Sent to our own server function (api/contact.js) which emails you via Gmail
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Send failed");

      lastSent.current = Date.now();
      setForm(empty);
      setStatus({
        type: "success",
        msg: "Thank you! Your hiring request has been sent. I'll get back to you soon.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        msg: err.message && err.message !== "Failed to fetch" && err.message !== "Send failed"
          ? err.message
          : "Something went wrong while sending. Please try again or email me directly.",
      });
    }
  };

  const statusStyle = {
    success: "bg-green-500/15 text-green-600 dark:text-green-400",
    error: "bg-red-500/15 text-red-600 dark:text-red-400",
    loading: "text-muted",
  }[status.type];

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <h2 className="section-title">Hire Me / Contact</h2>
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-10">
          {/* info card */}
          <div className="glass p-6 sm:p-7">
            <h3 className="text-xl font-bold">Let's work together</h3>
            <p className="my-3 text-muted">
              Hiring for a web development role? Fill in the form with the position details and it
              will reach my inbox directly.
            </p>
            <ul className="grid gap-3">
              <li className="flex items-start gap-2.5">
                <FaPhoneAlt className="mt-1.5 shrink-0 text-accent" />
                <a href={profile.phoneLink}>{profile.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaEnvelope className="mt-1.5 shrink-0 text-accent" />
                <a href={`mailto:${profile.email}`} className="break-all">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="mt-1.5 shrink-0 text-accent" />
                <span>{profile.address}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a className="icon-btn !rounded-full !text-ink" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a className="icon-btn !rounded-full !text-ink" href={profile.twitter} target="_blank" rel="noreferrer" aria-label="X">
                <FaXTwitter />
              </a>
              <a className="icon-btn !rounded-full !text-ink" href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* form */}
          <form className="glass grid gap-4 p-5 sm:p-6" onSubmit={onSubmit}>
            <div className={row}>
              <label className={label}>
                Company name *
                <input className="field" name="company_name" value={form.company_name} onChange={onChange} placeholder="e.g. Acme Technologies Pvt. Ltd." required />
              </label>
              <label className={label}>
                Your name *
                <input className="field" name="contact_person" value={form.contact_person} onChange={onChange} placeholder="Your full name" required />
              </label>
            </div>

            <div className={row}>
              <label className={label}>
                Work email *
                <input className="field" type="email" name="from_email" value={form.from_email} onChange={onChange} placeholder="name@company.com" required />
              </label>
              <label className={label}>
                Phone
                <input className="field" type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91 98765 43210" />
              </label>
            </div>

            <div className={row}>
              <label className={label}>
                Position / Role *
                <input className="field" name="position" value={form.position} onChange={onChange} placeholder="e.g. React / MERN Stack Developer" required />
              </label>
              <label className={label}>
                Job type
                <select className="field" name="job_type" value={form.job_type} onChange={onChange}>
                  <option value="">Select job type</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                  <option>Contract / Freelance</option>
                </select>
              </label>
            </div>

            <div className={row}>
              <label className={label}>
                Work mode
                <select className="field" name="work_mode" value={form.work_mode} onChange={onChange}>
                  <option value="">Select work mode</option>
                  <option>On-site</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </label>
              <label className={label}>
                Job location
                <input className="field" name="location" value={form.location} onChange={onChange} placeholder="e.g. Ahmedabad, Gujarat" />
              </label>
            </div>

            <label className={label}>
              Offered salary / stipend (optional)
              <input className="field" name="salary" value={form.salary} onChange={onChange} placeholder="e.g. ₹3–4 LPA or ₹15,000 / month" />
            </label>

            <label className={label}>
              Message / Job description *
              <textarea
                className="field resize-y"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Describe the role, required skills, interview process and expected joining date…"
                required
              />
            </label>

            {/* honeypot */}
            <input type="text" name="website" value={form.website} onChange={onChange} tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

            <button className="btn btn-primary w-full" disabled={status.type === "loading"}>
              {status.type === "loading" ? "Sending…" : "Send Hiring Request"}
            </button>

            {status.msg && (
              <p className={`rounded-lg px-3.5 py-2.5 text-sm ${statusStyle}`} role="status">
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
