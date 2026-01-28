import React, { useEffect } from "react";
import { articles } from "../components/InsightsSection/InsightsSection";
import { Link } from "react-router";

export default function BlogPage() {
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
          <div key={item.id}>
            <img
              src={item.image}
              className="w-full object-cover rounded-t-md"
            />
            <div className="bg-white px-3 py-5 flex flex-col gap-3 rounded-b-md">
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-sm">{item.text}</p>
              <Link to={`/blogs/${item.id}`} className="read-link">
                Read article →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
