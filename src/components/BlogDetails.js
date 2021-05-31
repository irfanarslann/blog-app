import React from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "../common/useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();
  const deleteArticle = (id) => {
    if (id) {
      fetch("http://localhost:8000/blogs/" + id, {
        method: "DELETE",
      }).then(() => {
        history.push("/");
      });
    }
  };
  return (
    <div className="blog-details">
      {error && <div> Error : {error}</div>}
      {isPending && <div> Blog Loading...</div>}
      {!isPending && (
        <article>
          <h1>{blog.title}</h1>
          <h6>written by {blog.author}</h6>
          <p>{blog.body}</p>

          <button onClick={() => deleteArticle(blog.id)}>
            Delete This Article
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
