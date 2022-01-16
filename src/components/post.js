import React, { useState } from "react";
import { actionCreators } from "../store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Post = () => {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [body, setBody] = useState("");
  const noOfPostsPosted = useSelector((state) => state.blogPostsList.length);
  const [postAdded, setNewPostStatus] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form is submitted");
    actionCreators.post({
      id: noOfPostsPosted,
      userId: userId,
      title: title,
      body: body,
    });
    setNewPostStatus(true);
  };

  const hideModal = () => {
    setNewPostStatus(false);
  };

  return (
    <div className="post">
      <h1>Create a new post</h1>
      <Modal show={postAdded} backdrop="static" keyboard={false}>
        <Modal.Header>New Post Added!</Modal.Header>
        <Modal.Footer>
          <button class="btn btn-primary  btn-lg" onClick={hideModal}>
            Got It
          </button>
        </Modal.Footer>
      </Modal>
      <form className="post-form" onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="col-9">
            <label for="fortitle">Title</label>
            <input
              value={title}
              onChange={handleTitleChange}
              type="text"
              className="form-control"
              id="fortitle"
              placeholder="Enter Title of the post"
              required
            />
          </div>

          <div class="col">
            <label for="fortitle">UserId</label>
            <input
              value={userId}
              onChange={handleUserIdChange}
              type="text"
              class="form-control"
              placeholder="User ID"
              required
            />
          </div>
        </div>

        <div className="form-group"></div>
        <div className="form-group">
          <label for="forbody">Body</label>
          <textarea
            value={body}
            onChange={handleBodyChange}
            className="form-control"
            id="forbody"
            rows="5"
            required
          ></textarea>
          <div className="form-btn">
            <button type="submit" class="btn btn-secondary  btn-lg">
              Post
            </button>
            <Link class="btn btn-outline-success btn-sm" to="/posts">
              Back to posts
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Post;
