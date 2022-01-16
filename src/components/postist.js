import React, { useEffect, useState } from "react";
import axios from "axios";
import PostTile from "./postTile";
import { useSelector } from "react-redux";
import { actionCreators } from "../store";

const PostList = () => {
  const state = useSelector((state) => state.blogPostsList);

  const fetchData = async () => {
    console.log("Fetching data from the internet");
    const result = await axios("https://jsonplaceholder.typicode.com/posts");

    await actionCreators.postList(result.data);
  };
  useEffect(() => {
    if (state.length < 1) {
      console.log("not availabale");
      fetchData();
    }
  }, []);

  return (
    <div className="post-tiles-container">
      <h1>Recent Posts..</h1>
      <div className="tiles">
        {[...state].reverse().map((post, index) => {
          return (
            <PostTile
              key={index}
              id={parseInt(post.id) - 1}
              title={post.title}
              body={post.body}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
