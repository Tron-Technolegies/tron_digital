import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h2 className="contact-heading">Get in touch</h2>
          <p className="contact-subtext">
            Have questions or ready to transform your business with AI automation ?
          </p>

          {/* Email */}
          <a href="mailto:Thankyou@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <p>Email us</p>
              <span>Thankyou@gmail.com</span>
            </div>
            <FaArrowRight className="contact-arrow" />
          </a>

          {/* Phone */}
          <a href="tel:+919876543210" className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <p>Call us</p>
              <span>+91 9876543210</span>
            </div>
            <FaArrowRight className="contact-arrow" />
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps/place/Crosby+Street,+NY,+US"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <p>Our Location</p>
              <span>crosty Street, NY, US</span>
            </div>
            <FaArrowRight className="contact-arrow" />
          </a>
        </div>

        {/* Right: Form */}
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* CTA Section with spacing */}
      <div className="cta-container" style={{ marginTop: "8rem" }}>
        <h2>
          Become part of the <br /> design revolution
        </h2>
        <p>Jump on a membership and start requesting designs right away!</p>
        <button className="cta-btn">See Pricing ○</button>
      </div>
    </section>
  );
}
