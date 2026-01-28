import React from "react";
import "./InsightsSection.css";

import img1 from "../../assets/insights/img1.png";
import img2 from "../../assets/insights/img2.png";
import img3 from "../../assets/insights/img3.png";
import { Link } from "react-router";

export const articles = [
  {
    id: 1,
    image: img1,
    title: "Title",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    id: 2,
    image: img2,
    title: "Title",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    id: 3,
    image: img3,
    title: "Title",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    id: 4,
    image: img1,
    title: "Title",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    id: 5,
    image: img2,
    title: "Title",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    id: 6,
    image: img3,
    title: "Title",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
];

export default function InsightsSection() {
  return (
    <section className="insights-section" id="insights">
      <div className="insights-header">
        <span className="insights-tag">✦ Insights</span>
        <h2 className="insights-title">Our Latest Digital Insights</h2>
        <p className="insights-subtitle">
          Felis, semper ullamcorper sed pretium tristique vulputate semper massa
          ultrices. Integer orci gravida blandit amet.
        </p>
      </div>

      <div className="insights-grid">
        {articles.map((article, index) => (
          <div className="insight-card" key={index}>
            <img src={article.image} alt="insight" />
            <div className="card-content">
              <h3>{article.title}</h3>
              <p>{article.text}</p>
              <Link to={`/blogs/${article.id}`} className="read-link">
                Read article →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="read-more">
        <Link to={"/blogs"}>Read more ⭢</Link>
      </div>
    </section>
  );
}
