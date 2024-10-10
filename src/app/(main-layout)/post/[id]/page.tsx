'use client';
import React from 'react';
import { PageProps } from '../../../../../.next/types/app/layout';

import { getPostForRead } from '@/services/postService';
import dynamic from 'next/dynamic';
import PostInfo from '@/sections/post-details/PostInfo';
import PostComments from '@/sections/post-details/PostComments';
import { useGetPostForRead } from '@/hooks/post.hook';


const PostContent = dynamic(
  () => import('@/sections/post-details/PostContent'),
  { ssr: false },
);
const PDFGenerateButton = dynamic(
  () => import('@/components/ui/PDFGenerateButton'),
  { ssr: false },
);
 function PostDetailsPage({ params }: PageProps) {
  const postId = params.id;
  
  const {data:post,isLoading,isFetching,error} = useGetPostForRead(postId)
  if(isLoading||isFetching){
    return <div className='text-center'>
      <span className="loading loading-ring w-32 md:w-52 text-primary-color mt-40"></span>
    </div>
  }
  if(error){
    return <h1 className='text-3xl dark:text-white font-medium'>{error?.message}</h1>
  }

  const postInfoData = {
    id: post._id,
    author: post.author,
    upvote: post.total_upvote,
    downvote: post.total_downvote,
    createdAt: post.createdAt,
  };
  return (
    <div>
      <div
        id="post-content"
        className="p-5 bg-white dark:bg-dark-light space-y-5 shadow mt-5 mb-10"
      >
        <div className="text-end">
          <PDFGenerateButton />
        </div>
        <img src={post.thumbnail} className=" w-full lg:w-1/2" alt="" />
        <h1 className=" text-3xl md:lg:text-4xl lg:text-5xl font-medium text-black dark:text-white">
          {post.title}
        </h1>
        <PostContent content={post.content} />
      </div>
      <PostInfo data={postInfoData} />
      <PostComments postId={postId} />
    </div>
   
  );
}

export default PostDetailsPage;
