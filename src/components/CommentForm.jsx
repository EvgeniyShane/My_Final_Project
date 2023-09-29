import React, { useState } from 'react';
import axios from 'axios';
import '@/components/CommentForm.css'; // Импорт CSS файла

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = localStorage.getItem('accessToken');


      const response = await axios.post(
        'http://127.0.0.1:8000/admin/webapi/comment/',
        {
          text: commentText,
          postId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log('Comment created:', response.data);
      setCommentText('');
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  return (
    <div className="comment-form">
      <h3>Add a comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write your comment here"
          rows="5"
        />
        <button type="submit">Add a comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
