import React, { useState } from "react";
import "./FAQ.css";

const faqData = {
  "User Accounts": [
    {
      q: "How do I create an account?",
      a: "Click the Sign Up button and fill in your details to create an account.",
    },
    {
      q: "Can I delete my account?",
      a: "Yes, you can delete your account from the settings page.",
    },
  ],
  "Plans & Features": [
    {
      q: "What plans are available, and what do they include?",
      a: "We offer Basic, Pro, and Business plans with varying levels of content access, AI tools, analytics, and campaign features.",
    },
    {
      q: "Can I switch between plans at any time?",
      a: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      q: "Is there a free trial or demo available?",
      a: "We offer a 14-day free trial with access to all premium features.",
    },
  ],
  Campaigns: [
    {
      q: "How do I launch a new campaign?",
      a: "Go to the Campaigns tab in your dashboard and click 'Create New'.",
    },
    {
      q: "Can I track campaign performance?",
      a: "Yes, you can monitor engagement, reach, and conversion rates in real time.",
    },
  ],
  Payments: [
    {
      q: "What payment methods are accepted?",
      a: "We accept credit cards, PayPal, and bank transfers.",
    },
    {
      q: "Is my payment information secure?",
      a: "Yes, we use industry-standard encryption and security protocols.",
    },
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Plans & Features");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <p className="faq-badge">✦ FAQ</p>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        We're here to help with any questions you have about plans, accounts,
        and supported features.
      </p>

      {/* Tabs */}
      <div className="faq-tabs">
        {Object.keys(faqData).map((cat) => (
          <button
            key={cat}
            className={`faq-tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        {faqData[activeCategory].map((item, i) => (
          <div
            key={i}
            className={`faq-item ${openIndex === i ? "open" : ""}`}
            onClick={() => toggleQuestion(i)}
          >
            <div className="faq-question">
              {item.q}
              <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
            </div>
            {openIndex === i && <div className="faq-answer">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
