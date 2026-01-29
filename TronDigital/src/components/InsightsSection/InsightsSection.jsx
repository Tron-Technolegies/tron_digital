import React from "react";
import "./InsightsSection.css";
import { articles } from "../../utils/articles";
import { Link } from "react-router";

export default function InsightsSection() {
  function limitHTML(html, maxLength) {
    const div = document.createElement("div");
    div.innerHTML = html;

    const text = div.textContent || div.innerText || "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }
  return (
    <section className="insights-section" id="insights">
      <div className="insights-header">
        <span className="insights-tag">✦ Insights</span>
        <h2 className="insights-title">Our Latest Digital Insights</h2>
        <p className="insights-subtitle">
          Practical ideas, real-world learnings, and expert perspectives on
          digital marketing, technology, and growth. No jargon. No guesswork.
          Just insights you can apply.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 h-full max-w-[1200px] mx-auto gap-5">
        {articles.map((article, index) => (
          <div
            className="flex flex-col gap-5 bg-white rounded-lg items-left"
            key={article.id}
          >
            <img
              src={article.image}
              className="object-cover rounded-t-lg"
              alt="insight"
            />
            <div className="p-3 flex flex-col gap-3">
              <h3 className="text-black text-left font-semibold">
                {article.title}
              </h3>
              <div
                className="text-sm text-black text-left"
                dangerouslySetInnerHTML={{
                  __html: limitHTML(article.content, 100),
                }}
              ></div>
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
