import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Comment from '@/components/Comment';
import '@/components/CommentForm.css';

const CommentForm = ({ post }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const ref=useRef(null);

  const loadComments = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/comments/?post=${post.id}`);
      setComments(response.data.results);
    } catch (error) {
      console.error('Error loading comments:', error);
    }
  };

  useEffect(() => {
    loadComments();
  }, [post.id]);


  const submitReply=(author)=> {
   console.log(ref.current)
   ref.current?.scrollIntoView({behavior: "smooth"})
   ref.current.value=`${author}, `
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = localStorage.getItem('access_token');

      const commentData = {
        post: post.id,
        author: {
          username: userData.username,
          id: userData.id
        },
        comment: commentText,
      };

      await axios.post(
        'http://127.0.0.1:8000/api/comments/',
        commentData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log('Comment created');
      setCommentText('');
      loadComments();  
    } catch (error) {
      console.error('Error creating comment:', error.response);
    }
  };

  return (
    <div className="comment-form">
      <h3>Добавить комментарий</h3>
      <form onSubmit={handleSubmit}>
        <textarea 
        ref={ref}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Текст комментария"
          rows="5"
        />
        <button type="submit">Отправить</button>
      </form>

      {comments.length > 0 && (
        <div className="comments">
          <h4>Комментарии:</h4>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              author={comment.author.username}
              comment={comment.comment}
              pubDate={comment.pub_date}
              id={comment.id}
              onReply={submitReply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentForm;