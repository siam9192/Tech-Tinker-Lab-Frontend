'use client';
import MyPostCard from '@/components/card/MyPostCard';
import { useGetCurrentUserPosts } from '@/hooks/post.hook';
import { IPost } from '@/types';
import React from 'react';

function MyPostTable() {
  const { data: posts = [] } = useGetCurrentUserPosts();

  return (
    <div className=" dark:text-white">
      <div className="text-end text-3xl">Total Posts ({posts.length})</div>
      <div className="mt-10 grid  grid-cols-1 lg:grid-cols-2 gap-5">
        {posts.map((post: IPost) => (
          <MyPostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export default MyPostTable;
