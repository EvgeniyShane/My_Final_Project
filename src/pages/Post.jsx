import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import Navbar from "@/components/Navbar";
import "./Post.css";
import CommentForm from "@/components/CommentForm";
import { Link } from "react-router-dom";
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("focus");
      const response = await axios.get("http://localhost:8000/api/posts/");
      const data = response.data.results.map((d) => {
        return {
          ...d,
          ref: React.createRef(),
        };
      });
      setPosts (data);
      setTimeout(() => {
        console.log(data)
        const ref = data.find((p) => {
          return p.title.replace(/\s/g, "") === searchTerm;
        })?.ref;
        ref?.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  useEffect(() => {
        fetchPosts();
     
  }, []);

  return (
    <div className="post-container">
      <Navbar />
      <div className="posts">
        {posts.map((post) => {
          // const ref=React.createRef()
          // post.ref=ref
          return (
            <div ref={post.ref} key={post.id} className="post">
              <h2>{post.title}</h2>
              {parse(post.content)}
              <div className="comments-section">
                <h3>Чатик</h3>
                <CommentForm post={post} />
                </div>
              <ScrollToTopButton />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Post;
