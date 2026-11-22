import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext.jsx";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand">
          <img src="https://res.cloudinary.com/dxz5ta03h/image/upload/v1768743113/portfolio_y6otag.png"
            width="30px"
          />
        </a>

        <nav className={`navbar__links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle light / dark mode"
            title="Toggle theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="icon-btn navbar__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
