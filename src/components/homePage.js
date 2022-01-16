import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1>Blogs</h1>
        <h2>Want to create a new blog?</h2>
        <div className="button-group">
          <Link class="btn btn-success button" to="/createPost">
            Add new Post
          </Link>
          <Link class="btn btn-success" to="/posts">
            See Recent Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
