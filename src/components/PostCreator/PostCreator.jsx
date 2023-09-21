import React from "react";
import Button from "react-bootstrap/Button";

export const PostCreator = (props) => {
  return (
    <>
      <form>
        <h2>Создание нового поста</h2>
        <label className="col-sm-12 col-form-label">
          <b>Заголовок</b>
          <input
            className="form-control form-control-sm"
            autoFocus={true}
            type="text"
            placeholder="Заголовок"
            onChange={props.savePostTitleToState}
            required
            ref={props.getTitle}
          />
        </label>
        <br />
        <label className="col-sm-12 col-form-label">
          <b>Контент</b>
          <textarea
            className="form-control form-control-sm"
            placeholder="Описание"
            onChange={props.savePostContentToState}
            rows="18"
            cols="41"
            required
            ref={props.getContent}
          />
        </label>
        <br />
        <Button onClick={props.savePost} variant="outline-primary">
          Добавить
        </Button>{" "}
      </form>
    </>
  );
};
