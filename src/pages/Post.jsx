import React, { useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import Navbar from '@/components/Navbar';
import './Post.css';
import CommentForm from '@/components/CommentForm';

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/posts/');
      setPosts(response.data.results);
    } catch (error) {
      console.error('Error fetching posts: ', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const onSubmit = async (data) => {
    try {
      console.log('Form data:', data);
      const response = await axios.post(`http://localhost:8000/auth/jwt/create/`, data);
      const { access, refresh } = response.data;
  
      // Сохраняем токены в localStorage
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
  
      // ... остальной код
  
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
      }
    }
  };
  
  return (
    <div className="post-container">
      <Navbar />
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            {parse(post.content)}

            {/* Комментарии */}
            <div className="comments-section">
              <h3>Comments</h3>
              <CommentForm postId={post.id} />
              {/* Здесь можно добавить компонент для отображения комментариев */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;