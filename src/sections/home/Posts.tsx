'use client';
import PostCard from '@/components/card/PostCard';
import { useGetPostsQuery } from '@/redux/api/post.api';
import { getCurrentUserData } from '@/services/authService';
import { IUser } from '@/types/user.type';
import React, { useEffect, useState } from 'react';
import { PageProps } from '../../../.next/types/app/layout';
import { TParam } from '@/types/response';
import { IPost } from '@/types';

const Posts = ({ searchParams }: PageProps) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [page, setPage] = useState(1);
  const [prevPosts, setPrevPosts] = useState<IPost[]>([]);
  const params: TParam[] = [
    {
      name: 'searchTerm',
      value: searchParams.searchTerm,
    },
    {
      name: 'category',
      value: searchParams.category,
    },
    {
      name: 'sort',
      value: searchParams.sort,
    },
    {
      name: 'page',
      value: page,
    },
  ];

  const { data, isLoading, isFetching, refetch } = useGetPostsQuery(params, {
    pollingInterval: 10000,
  });
  const posts = data?.data || [];
  const meta = data?.meta;
  const pages = meta?.pages;

  useEffect(() => {
    const container = document.getElementById('home-container');
    if (!container) {
      return;
    }
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= container.offsetHeight - 50 &&
        (pages?.length || 0) > page &&
        !isLoading &&
        !isFetching
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [page, isFetching]);

  useEffect(() => {
    getCurrentUserData().then((data) => setCurrentUser(data));
  }, []);

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    if (!isLoading && !isFetching && posts.length) {
      setPrevPosts([...prevPosts, ...posts]);
    }
  }, [isLoading, isFetching]);

  return (
    <section className="py-5">
      {prevPosts.length ? (
        <div>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
            {prevPosts.map((post) => (
              <PostCard post={post} currentUser={currentUser} />
            ))}
          </div>
          {isLoading ||
            (isFetching && (
              <div className="flex items-center justify-center mt-3 gap-2 dark:text-white">
                <span className="font-bold text-xl ">Loading More</span>
                <span className="loading loading-dots loading-md"></span>
              </div>
            ))}
        </div>
      ) : (
        <div>
          <img className="mx-auto" src="/images/not-result.png" alt="" />
          <h1 className="text-xl font-bold text-center">No Result Found</h1>
        </div>
      )}
    </section>
  );
};

export default Posts;
