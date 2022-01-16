import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { actionCreators } from "../store";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const EditPost = () => {
  let { id } = useParams();
  const post = useSelector((state) => state.blogPostsList[id]);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const [postEdited, setPostEditedStatus] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actionCreators.editById({ id: id, title: title, body: body });
    setPostEditedStatus(true);
  };

  const hideModal = () => {
    setPostEditedStatus(false);
  };

  return (
    <div className="post">
      <h1>Edit Post</h1>
      <Modal show={postEdited} backdrop="static" keyboard={false}>
        <Modal.Header>Post Edited Successfully!!</Modal.Header>
        <Modal.Footer>
          <button class="btn btn-primary  btn-lg" onClick={hideModal}>
            Got It
          </button>
        </Modal.Footer>
      </Modal>
      <form className="post-form" onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="col">
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
              Edit Post
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

export default EditPost;
