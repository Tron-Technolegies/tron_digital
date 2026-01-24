// NavbarVolt.js
import React, { useState } from "react";
import "./NavbarVolt.css";

export default function NavbarVolt() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="header">
        <a href="/" className="nav-logo">
          <img src="/logo.png" alt="Tron Digital" />
        </a>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Desktop Navbar Links */}
        <nav className="navbar desktop-nav">
          <a href="/">Digital</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <button>Contact Us</button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      {/* Mobile Sidebar Menu */}
      <nav className={`mobile-nav ${isOpen ? "active" : ""}`}>
        <div className="mobile-nav-header">
          <a href="/" className="mobile-logo" onClick={closeMenu}>
            <img src="/logo.png" alt="Tron Digital" />
          </a>
          <div className="close-btn" onClick={closeMenu}>
            <span>&times;</span>
          </div>
        </div>
        <div className="mobile-nav-links">
          <a href="/" onClick={closeMenu}>
            Digital
          </a>
          <a href="/" onClick={closeMenu}>
            Services
          </a>
          <a href="/" onClick={closeMenu}>
            About
          </a>
          <button onClick={closeMenu}>Contact Us</button>
        </div>
      </nav>
    </>
  );
}
