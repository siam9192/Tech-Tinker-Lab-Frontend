
import React from 'react';
import { PageProps } from '../../../../../.next/types/app/layout';

import { getPostForRead } from '@/services/postService';
import dynamic from 'next/dynamic';


const PostContent = dynamic(()=>import('@/sections/post-details/PostContent'),{ssr:false})

async function PostDetailsPage({ params }: PageProps) {
  const postId = params.id;
  let post;
  try {
    post = await getPostForRead(postId);
  } catch (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className="space-y-5 p-5 md:p-10">
      <img src={post.thumbnail} className=" lg:w-1/2" alt="" />
      <h1 className=" text-3xl md:lg:text-4xl lg:text-5xl font-medium text-black dark:text-white">
        {post.title}
      </h1>
      <PostContent content={post.content} />
    </div>
  );
}

export default PostDetailsPage;
