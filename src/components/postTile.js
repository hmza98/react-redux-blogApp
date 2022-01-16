import React from "react";
import { Link } from "react-router-dom";

const PostTile = ({ id, title, body }) => {
  return (
    <div class="card post-tile">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{body}</p>
        <Link to={`/editpost/${id}`} class="btn btn-warning">
          Edit Post
        </Link>
      </div>
    </div>
  );
};

export default PostTile;
