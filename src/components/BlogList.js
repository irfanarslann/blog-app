import React from "react";
import { Link } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-preview">
      
      <h1>{title}</h1>
      
      {blogs.map((blog) => (
        <div className="blog-box" key={blog.id}>
          <h2>{blog.title}</h2>
          <small>Written By {blog.author}</small> <br />
          <button>
            <Link to={`/details/${blog.id}`}>Read it...</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
