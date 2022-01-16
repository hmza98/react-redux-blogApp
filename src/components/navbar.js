import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
          Blogs
        </Link>
        <form class="d-flex">
          <Link class="navbar-brand btn btn-success" to="/createPost">
            New Post
          </Link>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
