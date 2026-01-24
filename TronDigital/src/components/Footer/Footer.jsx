import React from "react";
import "./Footer.css";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Links */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">What we do</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Link</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Get in touch</h4>
          <p> rizwan@trondigital.ae</p>
          <p> Plaza 30, Unit 2B-SF - Delma St - Abu Dhabi</p>
          <p>
            +971 055 706 9222
            <br />
            +971 56 814 5866
          </p>
        </div>

        {/* Subscribe */}
        <div className="footer-col subscribe">
          <h4>Subscribe</h4>
          <div className="subscribe-box">
            <input type="email" placeholder="Email address" />
            <button>
              <IoIosArrowForward />
            </button>
          </div>
          <p className="subscribe-text">
            Hello, we are Tron Digital. Our goal is to translate the positive effects from
            revolutionising how companies engage with their clients & their team.
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
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
