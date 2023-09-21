import React, { useState, useRef } from "react";
import { PostEditor } from "../PostEditor/PostEditor";
import { PostCreator } from "../PostCreator/PostCreator";
import { Post } from "../Post/Post";
import Button from "react-bootstrap/Button";
import "./Posts.scss";

export const Posts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([
    {
      id: 1,
      title: "GTA 5",
      content: "Description Here",
    },
    {
      id: 2,
      title: "Half Life 2",
      content: "Description Here",
    },
  ]);

  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  const getTitle = useRef();
  const getContent = useRef();

  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
  };

  const savePostContentToState = (event) => {
    setContent(event.target.value);
  };

  const savePost = (event) => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, id }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost);
  };

  const editPost = (id) => {
    setEditPostId(id);
    toggleModifyPostComponent();
  };

  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map((eachPost) => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }

      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };

  const deletePost = (id) => {
    const modifiedPost = allPosts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };

  if (isCreateNewPost) {
    return (
      <>
        <PostCreator
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
        />
        <Button onClick={toggleCreateNewPost} variant="danger">
          Отменить
        </Button>{" "}
      </>
    );
  } else if (isModifyPost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    });

    return (
      <>
        <PostEditor
          title={post.title}
          content={post.content}
          updatePost={updatePost}
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          toggleCreateNewPost={toggleCreateNewPost}
        />
        <Button onClick={toggleModifyPostComponent} variant="danger">
          Отменить
        </Button>{" "}
      </>
    );
  }

  return (
    <>
      {!allPosts.length ? (
        <div className="text-center">
          <h1>Здесь пока ничего нет</h1>
        </div>
      ) : (
        allPosts.map((eachPost) => (
          <Post
            id={eachPost.id}
            key={eachPost.id}
            title={eachPost.title}
            content={eachPost.content}
            editPost={editPost}
            deletePost={deletePost}
          />
        ))
      )}
      <button
        className="btn btn-outline-dark button-edits create-post m-auto mb-5"
        onClick={toggleCreateNewPost}
      >
        Создать новый пост
      </button>
    </>
  );
};
