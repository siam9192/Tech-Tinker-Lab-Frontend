import { IComment } from '@/types/comment.type';
import React, { useEffect, useRef } from 'react';
import ProfileImage from '../ui/ProfileImage';
import ManageComment from '@/sub-compomnents/post-details/ManageComment';
import CommentReaction from '@/sub-compomnents/post-details/CommentReaction';
interface ICommentCardProps {
  comment: IComment;
  currentUserId: string | null | undefined;
  vote_type: 'UP' | 'DOWN' | null;
}
function CommentCard({ comment, currentUserId, vote_type }: ICommentCardProps) {
  const commentRef = useRef<HTMLParagraphElement>(null);
  const author = comment.author;

  useEffect(() => {
    const commentEle = commentRef.current;
    if (commentEle) {
      // commentEle.innerHTML = comment.comment;
    }
  }, [commentRef.current, comment]);

  const reactionData = {
    commentId: comment._id,
    upvote: comment.total_upvote,
    downvote: comment.total_downvote,
  };

 
  return (
    <div className="space-y-3 bg-gray-50 dark:bg-dark-mode p-3 rounded-md">
      <div className="flex items-center gap-2">
        <ProfileImage
          username={author.username}
          image_url={author.profile_photo}
          isVerified={author.is_verified}
        />
        <h2>{new Date(comment.createdAt).toLocaleString()}</h2>
      </div>
      <div className="text-xl font-medium" ref={commentRef}  dangerouslySetInnerHTML={{__html: comment.comment}}></div>
      <div className="flex items-center justify-between">
        <CommentReaction data={reactionData} currentUserVoteType={vote_type} />
        {currentUserId === author._id && <ManageComment comment={comment}/>}
      </div>
    </div>
  );
}

export default CommentCard;
