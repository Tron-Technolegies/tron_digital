import React, { useState } from "react";
import "./Footer.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

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
    <footer className="footer">
      <div className="footer-container">
        {/* Company Links */}
        <div className="footer-col">
          <h4>Company</h4>
          <div>
            <p
              className="cursor-pointer"
              onClick={() => handleNavigation("home")}
            >
              Home
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleNavigation("about")}
            >
              About
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleNavigation("team")}
            >
              Teams
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleNavigation("services")}
            >
              Service
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Link</h4>
          <div>
            <p
              className="cursor-pointer"
              onClick={() => handleNavigation("faq")}
            >
              FAQ
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleNavigation("insights")}
            >
              Blog
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleNavigation("contact")}
            >
              Support
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Get in touch</h4>
          <p> rizwan@trondigital.ae</p>
          <p> Plaza 30, Unit 2B-SF - Delma St - Abu Dhabi</p>
          <p>
            +91 9744866003
            <br />
            +971 56 814 5866
          </p>
        </div>

        {/* Subscribe */}
        <div className="footer-col subscribe">
          <h4>Subscribe</h4>
          <form
            className="subscribe-box"
            onSubmit={(e) => {
              e.preventDefault();
              handleChatClickCustom(
                `Helloo. ${email} is my email. I would like to know new Updates from Tron Digital`,
              );
              setEmail("");
            }}
          >
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">
              <IoIosArrowForward />
            </button>
          </form>
          <p className="subscribe-text">
            Hello, we are Tron Digital. Our goal is to translate the positive
            effects from revolutionising how companies engage with their clients
            & their team.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="/logo.png" alt="Tron Digital" />
        </div>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/company/tronsocial">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/tronsocial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
