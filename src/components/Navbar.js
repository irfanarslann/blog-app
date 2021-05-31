import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>IA's BLOG</h1>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="add-button">
            <Link to="/add">Add Blog</Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
