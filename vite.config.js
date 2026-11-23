import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { statSync } from "node:fs";

// Runs api/contact.js inside `npm run dev` / `npm run preview`,
// so the contact form works locally exactly like on Vercel.
function localApi(mode) {
  const env = loadEnv(mode, process.cwd(), ""); // loads ALL vars from .env
  for (const [k, v] of Object.entries(env)) {
    if (process.env[k] === undefined) process.env[k] = v;
  }

  const middleware = async (req, res, next) => {
    if (!req.url || !req.url.startsWith("/api/contact")) return next();
    try {
      let raw = "";
      for await (const chunk of req) raw += chunk;
      try {
        req.body = raw ? JSON.parse(raw) : {};
      } catch {
        req.body = {};
      }
      res.status = (code) => {
        res.statusCode = code;
        return res;
      };
      res.json = (obj) => {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(obj));
      };
      // re-import only when api/contact.js changes (keeps the rate-limit counter between requests)
      const abs = path.resolve("api/contact.js");
      const file = pathToFileURL(abs).href + `?v=${statSync(abs).mtimeMs}`;
      const mod = await import(file);
      await mod.default(req, res);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: false, error: "Server error" }));
    }
  };

  return {
    name: "local-contact-api",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), localApi(mode)],
}));
