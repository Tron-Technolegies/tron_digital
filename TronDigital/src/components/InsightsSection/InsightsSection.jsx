import React from "react";
import "./InsightsSection.css";

import img1 from "../../assets/insights/img1.png";
import img2 from "../../assets/insights/img2.png";
import img3 from "../../assets/insights/img3.png";

export default function InsightsSection() {
  const articles = [
    {
      image: img1,
      title: "Title",
      text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      image: img2,
      title: "Title",
      text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      image: img3,
      title: "Title",
      text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      image: img1,
      title: "Title",
      text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      image: img2,
      title: "Title",
      text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      image: img3,
      title: "Title",
      text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
  ];

  return (
    <section className="insights-section">
      <div className="insights-header">
        <span className="insights-tag">✦ Insights</span>
        <h2 className="insights-title">Our Latest Digital Insights</h2>
        <p className="insights-subtitle">
          Felis, semper ullamcorper sed pretium tristique vulputate semper massa ultrices. Integer
          orci gravida blandit amet.
        </p>
      </div>

      <div className="insights-grid">
        {articles.map((article, index) => (
          <div className="insight-card" key={index}>
            <img src={article.image} alt="insight" />
            <div className="card-content">
              <h3>{article.title}</h3>
              <p>{article.text}</p>
              <a href="#" className="read-link">
                Read article →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="read-more">
        <button>Read more ⭢</button>
      </div>
    </section>
  );
}
