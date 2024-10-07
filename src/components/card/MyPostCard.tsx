'use client';
import { IPost } from '@/types';
import React, { useState } from 'react';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import AlertModal from '../modal/AlertModal';
import { useQueryClient } from '@tanstack/react-query';
import { errorToast, successToast } from '@/utils/toast';
import { deletePost } from '@/services/postService';
import EditPost from '@/sections/dashboard/my-posts/EditPost';
import PostAnalysisModal from '@/sub-compomnents/dashboard/my-posts/PostAnalysisModal';


interface IPostCardProps {
  post: IPost;
}

function MyPostCard({ post }: IPostCardProps) {
  const [isDeletePending, setIsDeletePending] = useState(false);
  const queryClient = useQueryClient();
  const handelDeletePost = async () => {
    setIsDeletePending(true);
    try {
      await deletePost(post._id);
      // Invalid query for refetch the data after successfully deleted the post
      queryClient.invalidateQueries(['MY-POSTS']);
      successToast('Post deleted successfully');
    } catch (error: any) {
      errorToast(error.message);
    }

    setIsDeletePending(false);
  };
  const defaultShowWord = 60;
  const postTitle = post.title;
  return (
    <div className=" bg-white dark:bg-dark-light p-5  rounded-lg shadow">
      <div className="flex flex-col md:flex-row  gap-2">
        <img className=" md:h-40 rounded-md" src={post.thumbnail} alt="" />
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">
            {postTitle.length > defaultShowWord
              ? postTitle.slice(0, defaultShowWord) + '..'
              : postTitle}
          </h1>
          <h6>
            Post Date{' '}
            <span className="text-primary-color">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </h6>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 dark:text-white">
              <span className="text-2xl">
                <MdArrowUpward />
              </span>
              <span className="text-xl font-medium">
                {post.total_upvote || 0}
              </span>
            </button>
            <button className="flex items-center gap-1 dark:text-white">
              <span className="text-2xl">
                <MdArrowDownward />
              </span>
              <span className="text-xl font-medium">
                {post.total_downvote || 0}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <div className="flex items-center gap-2">
        <PostAnalysisModal postId={post._id}/>
          <EditPost postId={post._id} />

          {/* Delete button */}
          <AlertModal
            message="After delete it can not be undone"
            heading="Are you sure you want to delete This post?"
            onConfirm={handelDeletePost}
          >
            <button className=" bg-pink-700 px-4 py-2 rounded-full text-white">
              {isDeletePending ? (
                <span className="loading loading-dots loading-lg"></span>
              ) : (
                'Delete'
              )}
            </button>
          </AlertModal>
        </div>
      </div>
    </div>
  );
}

export default MyPostCard;
