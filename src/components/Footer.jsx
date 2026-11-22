import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Created by {profile.name}.
    </footer>
  );
}
