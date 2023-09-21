import React from "react";
import Button from "react-bootstrap/Button";

export const PostEditor = (props) => {
  return (
    <>
      <form>
        <h2>Modify Post</h2>
        <label className="col-sm-12 col-form-label">
          <b>Title</b>
          <input
            className="form-control form-control-sm"
            defaultValue={props.title}
            autoFocus={true}
            onChange={props.savePostTitleToState}
            placeholder="title"
            size="39"
          />
        </label>
        <br />
        <label className="col-sm-12 col-form-label">
          <b>Content</b>
          <textarea
            className="form-control form-control-sm"
            defaultValue={props.content}
            onChange={props.savePostContentToState}
            placeholder="contents"
            rows="18"
            cols="41"
          />
        </label>
        <Button onClick={props.updatePost} variant="outline-primary">
          Добавить
        </Button>{" "}
      </form>
    </>
  );
};
