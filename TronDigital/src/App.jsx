import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TronVolt from "./pages/TronVolt";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import BlogPage from "./pages/BlogPage";
import SingleBlogPage from "./pages/SingleBlogPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "tron-volt", element: <TronVolt /> },
        { path: "blogs", element: <BlogPage /> },
        { path: "blogs/:id", element: <SingleBlogPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
