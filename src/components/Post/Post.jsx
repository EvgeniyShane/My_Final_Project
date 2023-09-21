import React from "react";
import Button from "react-bootstrap/Button";

import "./Post.scss";

export const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      <div className="card card-width bg-dark">
        <section key={id}>
          <h3>{title}</h3>
          <hr></hr>
          <p>{content}</p>
          <Button onClick={() => editPost(id)} variant="outline-primary">
            Редактировать
          </Button>{" "}
          <Button onClick={() => deletePost(id)} variant="outline-danger">
            Удалить
          </Button>{" "}
        </section>
      </div>
    </>
  );
};
