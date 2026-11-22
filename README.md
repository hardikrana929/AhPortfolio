# Hardik Asavala – React Portfolio

Vite + React portfolio with light/dark mode, loading timer, auto-scrolling skills carousel, project timeline, experience, certifications and a "Hire Me" form that emails you (no database).

## Run

```bash
npm install
cp .env.example .env   # then paste your Google Script URL
npm run dev
npm run build          # production build in /dist
```

## npm packages used

| Feature | Package |
| --- | --- |
| Auto-scrolling skills carousel | `swiper` |
| Projects timeline | `react-vertical-timeline-component` |
| Contact form → your email | Google Apps Script (no package) |
| Icons | `react-icons` |

## Set up the email form (Google Apps Script – free, uses your Gmail)

1. Open https://script.google.com signed in as `hstudy575@gmail.com` → **New project**.
2. Delete the default code, paste everything from `apps-script/Code.gs`, click **Save**.
3. **Deploy → New deployment → ⚙ Select type → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy** → **Authorize access** → choose your account → **Advanced → Go to project (unsafe) → Allow** (it is your own script).
5. Copy the **Web app URL** (ends with `/exec`).
6. Create `.env` from `.env.example` and set `VITE_GOOGLE_SCRIPT_URL=` to that URL. Restart `npm run dev`.
7. On Vercel/Netlify add the same variable and redeploy.

If you change `Code.gs` later: **Deploy → Manage deployments → ✏ Edit → Version: New version → Deploy** (the URL stays the same).

Limit: about 100 emails/day on a normal Gmail account – plenty for a portfolio.

## Edit content

All text, projects, skills, experience and certificates live in `src/data.js`.

## Test & troubleshoot the contact form

- After editing `.env`, restart `npm run dev`.
- "Contact form is not configured yet" → `VITE_GOOGLE_SCRIPT_URL` missing.
- "Something went wrong" → the Web app must be deployed with access **Anyone**, and the URL must end in `/exec` (not `/dev`).
- Check `hstudy575@gmail.com` (and Spam) after a test submit.

## Certificates

Put certificate images in `public/certificates/` and add an entry in `src/data.js`:
`image: "/certificates/my-cert.jpg"`. Clicking a card opens a larger preview with full details.
