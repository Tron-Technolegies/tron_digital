import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="header">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Tron Digital" />
        </a>

        {/* Hamburger */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
        </div>

        {/* Desktop Nav */}
        <nav className="navbar desktop-nav">
          <a href="#home">Home</a>
          <a href="#insights">Case Study</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>

          {/* Real route → keep Link */}
          <Link to="/tron-volt">Tron Volt</Link>

          <a href="#contact">
            <button>Contact Us</button>
          </a>
        </nav>
      </header>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeMenu} />}

      {/* Mobile Menu */}
      <nav className={`mobile-nav ${isOpen ? "active" : ""}`}>
        <div className="mobile-nav-header">
          <a href="#home" className="mobile-logo" onClick={closeMenu}>
            <img src="/logo.png" alt="Tron Digital" />
          </a>
          <div className="close-btn" onClick={closeMenu}>
            <span>&times;</span>
          </div>
        </div>

        <div className="mobile-nav-links">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#insights" onClick={closeMenu}>
            Case Study
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <Link to="/tron-volt" onClick={closeMenu}>
            Tron Volt
          </Link>

          <a href="#contact" onClick={closeMenu}>
            <button>Contact Us</button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
