import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";

const Post = () => {
  const [firstName, setFirstName] = useState("");
  const firstNameRef = useRef(null);
  const showFirstName = () => {
    console.log(firstName);
  };

  return (
    <div>
      <Navbar />
      <h1>Post</h1>
      <input type="text" ref={firstNameRef} />
      <button onClick={() => setFirstName(firstNameRef.current.value)}>
        Submit
      </button>
      <button onClick={showFirstName}>show</button>
    </div>
  );
};

export default Post;