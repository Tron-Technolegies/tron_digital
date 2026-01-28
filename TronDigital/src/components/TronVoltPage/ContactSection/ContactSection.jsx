import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import "./ContactSection.css";
import {
  handleChatClickCustom,
  handleEnquiryFormClick,
} from "../../../utils/whatsapp";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h2 className="contact-heading">Get in touch</h2>
          <p className="contact-subtext">
            Have questions or ready to transform your business with AI
            automation ?
          </p>

          {/* Email */}
          <a href="mailto:rizwan@trondigital.ae" className="contact-item">
            <div className="flex gap-2 items-center">
              <FaEnvelope className="contact-icon" />
              <div>
                <p>Email us</p>
                <span>rizwan@trondigital.ae</span>
              </div>
            </div>

            <FaArrowRight className="contact-arrow" />
          </a>

          {/* Phone */}
          <a href="tel:+971568145866" className="contact-item">
            <div className="flex gap-2 items-center">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <p>Call us</p>
                <span>+971 56 814 5866</span>
              </div>
            </div>

            <FaArrowRight className="contact-arrow" />
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/gD9m1qroJBh6cEMP8"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <p>Our Location</p>
              <span>Plaza 30, Unit 2B-SF - Delma St - Abu Dhabi</span>
            </div>
            <FaArrowRight className="contact-arrow" />
          </a>
        </div>

        {/* Right: Form */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleEnquiryFormClick({ name, email, message });
            setName("");
            setEmail("");
            setMessage("");
          }}
        >
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            rows="4"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* CTA Section with spacing */}
      <div className="cta-container" style={{ marginTop: "8rem" }}>
        <h2>
          Become part of the <br /> design revolution
        </h2>
        <p>Jump on a membership and start requesting designs right away!</p>
        <button
          onClick={() =>
            handleChatClickCustom(
              "Hey i want to know more about the price details of various marketing strategies",
            )
          }
          className="cta-btn"
        >
          See Pricing
        </button>
      </div>
    </section>
  );
}
