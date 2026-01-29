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
      a: "We offer Basic, Pro, and Business plans. Each plan includes different levels of access to digital tools, analytics, AI-powered features, and campaign support. As you move up, you unlock more advanced capabilities, deeper insights, and higher usage limits.",
    },
    {
      q: "Can I switch between plans at any time?",
      a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect immediately or at the start of your next billing cycle, depending on your selection.",
    },
    {
      q: "Is there a free trial or demo available?",
      a: "Yes. We offer a free trial or guided demo so you can explore the platform, features, and workflows before committing to a plan.",
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
