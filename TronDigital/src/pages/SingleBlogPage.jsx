import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { articles } from "../utils/articles";
import { GoDotFill } from "react-icons/go";

export default function SingleBlogPage() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(articles?.find((item) => item.id == id));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-7 max-w-7xl mx-auto mt-25  flex flex-col gap-3 items-center p-3 rounded-lg text-white">
      <h1 className="text-3xl font-semibold leading-relaxed max-w-5xl text-center">
        {blog?.title}
      </h1>
      <div className="flex gap-2 justify-center items-center">
        <p>{blog?.author}</p>
        <GoDotFill />
        <p className="italic">{blog?.date}</p>
      </div>
      <div className="flex gap-7">
        {blog?.topic?.map((item) => (
          <p className="p-2 rounded-full blog-topic" key={item}>
            {item}
          </p>
        ))}
      </div>
      <img src={blog?.image} className="my-5 rounded-3xl" />
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      ></div>
    </div>
  );
}
