'use client';
import CommentCard from '@/components/card/CommentCard';
import CreateCommentForm from '@/components/ui/CommentCreateForm';
import { useGetPostComments } from '@/hooks/comment.hook';
import { useGetCurrentUserCommentReactions } from '@/hooks/commentReaction.hook';
import { getCurrentUserData } from '@/services/authService';
import { IUser } from '@/types/user.type';
import React, { useEffect, useState } from 'react';

function PostComments({ postId }: { postId: string }) {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const { data, isLoading: isCommentsLoading } = useGetPostComments(postId);
  
  const { data: userReactions, isLoading: isUserReactionsLoading } =
    useGetCurrentUserCommentReactions(postId);

  const comments = data?.data;
  useEffect(() => {
    setIsUserLoading(true);
    getCurrentUserData().then((data) => {
      setCurrentUser(data);
      setIsUserLoading(false);
    });
  }, []);

  

  return (
    <section className="bg-white dark:bg-dark-light dark:text-white shadow p-5 md:p-10 space-y-3 min-h-[20vh]">
      <h1 className="text-xl font-bold ">Comments ({comments?.length})</h1>
      {!isUserLoading && !isCommentsLoading && !isUserReactionsLoading ? (
        comments?.length ? (
          <div className="grid grid-cols-1 gap-5">
            {comments?.map((comment) => (
              <CommentCard
                comment={comment}
                currentUserId={currentUser?._id}
                vote_type={
                  userReactions?.find((i) => i.comment === comment._id)
                    ?.vote_type || null
                }
              />
            ))}
          </div>
        ) : (
          <h1 className="text-2xl font-medium text-center">
            This Post Have No Comment
          </h1>
        )
      ) : (
        <h1>Loading....</h1>
      )}
      <CreateCommentForm postId={postId} currentUser={currentUser} />
    </section>
  );
}

export default PostComments;
