import useFetch from "../common/useFetch";
import React from "react";
import BlogList from "./BlogList";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {isPending && <div>Blogs Loading</div>}
      {error && <div> Error : {error} </div>}
      {blogs && <BlogList blogs={blogs} title="My Blogs" />}
    </div>
  );
};

export default Home;
