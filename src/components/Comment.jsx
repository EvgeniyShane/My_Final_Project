import React from 'react';
import '@/components/CommentForm.css'; 

const Comment = ({ author, comment, pubDate, id, onReply }) => {
  const formattedDate = new Date(pubDate).toLocaleString();

  return (
    <div className="comment-form"> 
      <div className="comment">
        <div>
          <strong>Author:</strong> {author}
        </div>
        <div>
          <strong>Comment:</strong> {comment}
        </div>
        <div>
          <strong>Published Date:</strong> {formattedDate}
        </div>
        <button onClick={()=> onReply(author)} >Ответить</button>
      </div>
    </div>
  );
};

export default Comment;