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
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      style={{ background: "var(--nav)", borderColor: "var(--border)", WebkitBackdropFilter: "blur(18px) saturate(160%)" }}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#home" className="text-xl font-extrabold !text-ink no-underline">
          <img src="https://res.cloudinary.com/dxz5ta03h/image/upload/v1768743113/portfolio_y6otag.png" 
            className="w-8 "
          />
        </a>

        {/* desktop links */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium !text-muted no-underline transition hover:!text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle light / dark mode"
            title="Toggle theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="icon-btn lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* mobile / tablet menu */}
      <nav
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
        style={{ background: "var(--modal)" }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="block border-t px-6 py-3.5 font-medium !text-ink no-underline"
            style={{ borderColor: "var(--border)" }}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
