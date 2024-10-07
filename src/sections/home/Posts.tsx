'use client';
import PostCard from '@/components/card/PostCard';
import { useGetPostsQuery } from '@/redux/api/post.api';
import { getCurrentUserData } from '@/services/authService';
import { IUser } from '@/types/user.type';
import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const { data } = useGetPostsQuery(undefined);

  const posts = data?.data || [];
  useEffect(() => {
    getCurrentUserData().then((data) => setCurrentUser(data));
  }, []);

  return (
    <section className="py-5">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {posts.map((post) => (
          <PostCard post={post} currentUser={currentUser} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
