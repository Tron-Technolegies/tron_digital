import React, { useEffect } from "react";

import { Link } from "react-router";
import { articles } from "../utils/articles";

export default function BlogPage() {
  function limitHTML(html, maxLength) {
    const div = document.createElement("div");
    div.innerHTML = html;

    const text = div.textContent || div.innerText || "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="min-h-screen flex flex-col gap-10 items-center"
      style={{ marginTop: "100px" }}
    >
      <h1 className="my-5 text-3xl font-semibold text-center text-white">
        All Blogs
      </h1>
      <div className="max-w-6xl w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center justify-center mx-auto my-7">
        {articles.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 h-full bg-white">
            <img
              src={item.image}
              className="w-full object-cover rounded-t-md"
            />
            <div className="bg-white px-3 py-5 flex flex-col gap-3 rounded-b-md">
              <p className="font-semibold text-lg">{item.title}</p>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: limitHTML(item.content, 100),
                }}
              ></div>

              <Link
                to={`/blogs/${item.id}`}
                className="read-link justify-self-end mt-auto"
              >
                Read article →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
