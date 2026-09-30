import { useState } from "react";
import '../styles/navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Methodology", "#methodology"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Certifications", "#certifications"],
    ["Contacts","#contact"]
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a href="#home" className="nav-logo">
          GARIKA<span>.</span>Cybersecurity
        </a>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </nav>
  );
}