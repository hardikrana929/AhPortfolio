# Hardik Asavala – Portfolio (React + Tailwind CSS)

Vite + React + Tailwind CSS. Glass UI, light/dark mode, loading timer, auto skills carousel,
projects timeline, experience, certificate carousel and a **Hire Me form that emails you
through your own Gmail (Google App Password)** – nothing is stored in a database.

## Run locally
```bash
npm install
cp .env.example .env     # then fill in GMAIL_USER + GMAIL_APP_PASSWORD
npm run dev
```
The contact form works locally too (a tiny dev server runs `api/contact.js`).
To test without sending a real email: add `MAIL_DRY_RUN=1` to `.env` (the email is only printed in the terminal).

## How the email works
React form → `POST /api/contact` → `api/contact.js` (serverless function) → Nodemailer → Gmail SMTP → your inbox.
The App Password lives only in server environment variables, never in the browser code.

## 1) Create the Google App Password
1. Open https://myaccount.google.com/security (signed in as `hstudy575@gmail.com`).
2. Turn on **2-Step Verification** (required for App Passwords).
3. Open https://myaccount.google.com/apppasswords → name it `portfolio` → **Create**.
4. Copy the 16-character password (spaces don't matter).

## 2) Local `.env`
```
GMAIL_USER=hstudy575@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```
Restart `npm run dev` after editing `.env`. Never commit `.env` (it is in `.gitignore`).

## 3) Deploy on Vercel
1. Push the project to GitHub and import it in Vercel (framework: Vite is auto-detected).
2. **Settings → Environment Variables**: add `GMAIL_USER` and `GMAIL_APP_PASSWORD`
   (tick Production, Preview, Development). Optional: `MAIL_TO`.
3. **Deployments → Redeploy** (variables apply only to new deployments).
4. Open the live site, submit the form, check your inbox (and Spam the first time).

## Built-in protection
Hidden honeypot field, server-side validation, HTML escaping, header-injection protection,
max 3 submissions/minute per visitor, 30-second resend limit in the browser.

## Troubleshooting
| Symptom | Fix |
| --- | --- |
| "Mail service is not configured." | `GMAIL_USER` / `GMAIL_APP_PASSWORD` missing – add on Vercel and redeploy |
| "Could not send the message." | Wrong App Password, 2-Step Verification off, or password revoked. Check Vercel → Logs → `Mail send failed:` |
| `/api/contact` 404 locally | Use `npm run dev` (not opening `dist/index.html` directly) |
| Form works locally, not on Vercel | Variables not added for Production, or you didn't redeploy |

## Edit content
Everything (profile, skills, projects, experience, certificates) lives in `src/data.js`.
Certificate images: put files in `public/certificates/` and use `image: "/certificates/name.jpg"`.
Colors: top of `src/index.css` (`--accent`, `--blob1..3`, `--card` …).

## Stack
Tailwind CSS 3 · Swiper (carousels) · react-vertical-timeline-component · react-icons · Nodemailer
