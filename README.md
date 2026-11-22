# Hardik Asavala – React Portfolio

Vite + React portfolio with light/dark mode, loading timer, auto-scrolling skills carousel, project timeline, experience, certifications and a "Hire Me" form that emails you (no database).

## Run

```bash
npm install
cp .env.example .env   # then fill in your EmailJS keys
npm run dev
npm run build          # production build in /dist
```

## npm packages used

| Feature | Package |
| --- | --- |
| Auto-scrolling skills carousel | `swiper` |
| Projects timeline | `react-vertical-timeline-component` |
| Contact form → your email | `@emailjs/browser` |
| Icons | `react-icons` |

## Set up the email form (EmailJS, free plan)

1. Create an account at https://www.emailjs.com.
2. **Email Services** → Add service (Gmail) → connect `hstudy575@gmail.com`. Copy the **Service ID**.
3. **Email Templates** → Create template. Set **To email** to `hstudy575@gmail.com` and **Reply-To** to `{{from_email}}`. Use this body:

```
Subject: New hiring request – {{position}} at {{company_name}}

Company: {{company_name}}
Contact person: {{contact_person}}
Email: {{from_email}}
Phone: {{phone}}

Position: {{position}}
Job type: {{job_type}}
Work mode: {{work_mode}}
Location: {{location}}
Salary/Stipend: {{salary}}

Message:
{{message}}
```

   Copy the **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. Put the three values in `.env`. When deploying (Vercel/Netlify), add the same three variables in the host's Environment Variables settings.

Note: the EmailJS public key is visible in the browser by design. In the EmailJS dashboard, restrict allowed domains to your portfolio domain to prevent abuse.

## Edit content

All text, projects, skills, experience and certificates live in `src/data.js`.

## Test & troubleshoot the contact form

- After editing `.env`, **restart** `npm run dev` (Vite reads `.env` only at start).
- Submit the form once yourself and check `hstudy575@gmail.com` (and Spam).
- Template variable names must match exactly: `company_name, contact_person, from_email, phone, position, job_type, work_mode, location, salary, message`.
- "Contact form is not configured yet" → `.env` values are missing/not loaded.
- Error on send → wrong IDs/key, Gmail service disconnected, or the domain is blocked in EmailJS security settings.
- Optional: add an **Auto-Reply** template in EmailJS so the company gets a confirmation (send it to `{{from_email}}`).

## Certificates

Put certificate images in `public/certificates/` and add an entry in `src/data.js`:
`image: "/certificates/my-cert.jpg"`. Clicking a card opens a larger preview with full details.
