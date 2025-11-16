import React from 'react';
import type { Comment } from '../../types';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div>
      <h3 className="text-lg font-bold">Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <div className="space-y-2">
          {comments.map((comment) => (
            <div key={comment.comment_id} className="card bg-base-100 p-4">
              <p>{comment.comment}</p>
              <small className="text-gray-500">By User {comment.user_id} {comment.created_at && `on ${comment.created_at}`}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection;