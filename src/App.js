import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchCommentsForPost } from './api';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleFetchComments = (postId) => {
    fetchCommentsForPost(postId)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleFetchComments(post.id)}>Fetch Comments</button>
          </li>
        ))}
      </ul>

      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;