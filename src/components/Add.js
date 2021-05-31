import React, { useState } from "react";
import { useHistory } from "react-router";

const Add = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Irfan");
  const history = useHistory();
  const addBlog = (e) => {
    e.preventDefault();
    const data = {
      title,
      body,
      author,
    };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="add-form">
      <h1>Add new Blog</h1>
      <form onSubmit={(e) => addBlog(e)}>
        <label> Blog Title</label>
        <input
          type="text"
          id="blogTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Article</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label> Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Irfan">Irfan</option>
          <option value="Kaan">Kaan</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Add;
