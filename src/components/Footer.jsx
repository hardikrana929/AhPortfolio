import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer
      className="section-alt border-t px-4 py-6 text-center font-semibold backdrop-blur-xl"
      style={{ borderColor: "var(--border)" }}
    >
      © {new Date().getFullYear()} Created by {profile.name}.
    </footer>
  );
}
