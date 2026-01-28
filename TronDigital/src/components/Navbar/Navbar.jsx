import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { handleChatClickCustom } from "../../utils/whatsapp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleNavigation(id) {
    if (location.pathname === "/") {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }

  return (
    <>
      <header className="header" style={{ backgroundColor: "black" }}>
        {/* Logo */}
        <Link to={"/"} className="nav-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Tron Digital" />
        </Link>

        {/* Hamburger */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
        </div>

        {/* Desktop Nav */}
        <nav className="navbar desktop-nav text-white">
          <p
            onClick={() => handleNavigation("home")}
            className="cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => handleNavigation("insights")}
            className="cursor-pointer"
          >
            Case Study
          </p>
          <p
            onClick={() => handleNavigation("services")}
            className="cursor-pointer"
          >
            Services
          </p>
          <p
            onClick={() => handleNavigation("about")}
            className="cursor-pointer"
          >
            About
          </p>

          {/* Real route → keep Link */}
          <Link to="/tron-volt">Tron Volt</Link>

          <button
            onClick={() =>
              handleChatClickCustom(
                "Hi I would like to know more about Tron Digital",
              )
            }
          >
            Contact Us
          </button>
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
          <p
            onClick={() => {
              handleNavigation("home");
              closeMenu();
            }}
            className="cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => {
              handleNavigation("insights");
              closeMenu();
            }}
            className="cursor-pointer"
          >
            Case Study
          </p>
          <p
            onClick={() => {
              handleNavigation("services");
              closeMenu();
            }}
            className="cursor-pointer"
          >
            Services
          </p>
          <p
            onClick={() => {
              handleNavigation("about");
              closeMenu();
            }}
            className="cursor-pointer"
          >
            About
          </p>

          <Link to="/tron-volt" onClick={closeMenu}>
            Tron Volt
          </Link>

          <button
            onClick={() => {
              handleChatClickCustom(
                "I would like to know more about Tron Digital",
              );
              closeMenu();
            }}
          >
            Contact Us
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
