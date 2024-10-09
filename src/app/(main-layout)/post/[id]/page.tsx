import React from 'react';
import { PageProps } from '../../../../../.next/types/app/layout';

import { getPostForRead } from '@/services/postService';
import dynamic from 'next/dynamic';
import PostInfo from '@/sections/post-details/PostInfo';
import PostComments from '@/sections/post-details/PostComments';
import PDFGenerateButton from '@/components/ui/PDFGenerateButton';

const PostContent = dynamic(
  () => import('@/sections/post-details/PostContent'),
  { ssr: false },
);

async function PostDetailsPage({ params }: PageProps) {
  const postId = params.id;
  let post;
  try {
    post = await getPostForRead(postId);
  } catch (error) {
    return <h1>Something went wrong</h1>;
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
        className="p-5 bg-white space-y-5 shadow mt-5 mb-10"
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
