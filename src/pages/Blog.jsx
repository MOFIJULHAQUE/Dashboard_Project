import React from "react";
import BlogArticle from "../components/blog/BlogArticle";
import { BlogContextProvider } from "../components/blog/BlogContext";

const Blog = () => {
  return (
    <>
      <BlogContextProvider>
        <BlogArticle />
      </BlogContextProvider>
    </>
  );
};

export default Blog;
