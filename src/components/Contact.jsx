import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { profile } from "../data.js";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: "idle", msg: "" });
  const lastSent = useRef(0);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.website) return; // bot
    if (Date.now() - lastSent.current < 30000) {
      setStatus({
        type: "error",
        msg: "Please wait a few seconds before sending again.",
      });
      return;
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: "error",
        msg: "Contact form is not configured yet. Please email me directly.",
      });
      return;
    }

    setStatus({ type: "loading", msg: "Sending…" });
    try {
      const { website, ...params } = form;
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
        publicKey: PUBLIC_KEY,
      });
      lastSent.current = Date.now();
      setForm(empty);
      setStatus({
        type: "success",
        msg: "Thank you! Your hiring request has been sent. I'll get back to you soon.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Something went wrong while sending. Please try again or email me directly.",
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">Hire Me / Contact</h2>
        <div className="contact__grid">
          <div className="contact__info">
            <h3>Let's work together</h3>
            <p>
              Hiring for a web development role? Fill in the form with the
              position details and it will reach my inbox directly.
            </p>
            <ul>
              <li>
                <FaPhoneAlt /> <a href={profile.phoneLink}>{profile.phone}</a>
              </li>
              <li>
                <FaEnvelope />{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <FaMapMarkerAlt /> <span>{profile.address}</span>
              </li>
            </ul>
            <div className="socials">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <div className="form__row">
              <label>
                Company name *
                <input
                  name="company_name"
                  value={form.company_name}
                  onChange={onChange}
                  placeholder="e.g. Acme Technologies Pvt. Ltd."
                  required
                />
              </label>
              <label>
                Your name *
                <input
                  name="contact_person"
                  value={form.contact_person}
                  onChange={onChange}
                  placeholder="Your full name"
                  required
                />
              </label>
            </div>

            <div className="form__row">
              <label>
                Work email *
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={onChange}
                  placeholder="name@company.com"
                  required
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="+91 98765 43210"
                />
              </label>
            </div>

            <div className="form__row">
              <label>
                Position / Role *
                <input
                  name="position"
                  value={form.position}
                  onChange={onChange}
                  placeholder="e.g. React / MERN Stack Developer"
                  required
                />
              </label>
              <label>
                Job type
                <select
                  name="job_type"
                  value={form.job_type}
                  onChange={onChange}
                  className={form.job_type ? "" : "is-empty"}
                >
                  <option value="">Select job type</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                  <option>Contract / Freelance</option>
                </select>
              </label>
            </div>

            <div className="form__row">
              <label>
                Work mode
                <select
                  name="work_mode"
                  value={form.work_mode}
                  onChange={onChange}
                  className={form.work_mode ? "" : "is-empty"}
                >
                  <option value="">Select work mode</option>
                  <option>On-site</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </label>
              <label>
                Job location
                <input
                  name="location"
                  value={form.location}
                  onChange={onChange}
                  placeholder="e.g. Ahmedabad, Gujarat"
                />
              </label>
            </div>

            <label>
              Offered salary / stipend (optional)
              <input
                name="salary"
                value={form.salary}
                onChange={onChange}
                placeholder="e.g. ₹3–4 LPA or ₹15,000 / month"
              />
            </label>

            <label>
              Message / Job description *
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Describe the role, required skills, interview process and expected joining date…"
                required
              />
            </label>

            {/* honeypot */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
              className="hp"
              aria-hidden="true"
            />

            <button
              className="btn btn--primary"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Sending…" : "Send Hiring Request"}
            </button>

            {status.msg && (
              <p
                className={`form__status form__status--${status.type}`}
                role="status"
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
