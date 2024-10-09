import PostReaction from '@/sub-compomnents/post-details/PostReaction';
import { IAuthor } from '@/types';
import { default_profile_photo } from '@/utils/constant';
import Link from 'next/link';
import React from 'react';

interface IPostInfoProps {
  data: {
    id: string;
    author: IAuthor;
    upvote: number;
    downvote: number;
    createdAt: string;
  };
}

function PostInfo({ data }: IPostInfoProps) {
  const profile = data.author;

  const postReactionData = {
    upvote: data.upvote,
    downvote: data.downvote,
    id: data.id,
  };

  return (
    <section className=" bg-white dark:bg-dark-mode p-5 md:p-10 shadow w-full flex items-center justify-between">
      <PostReaction data={postReactionData} />
      <div>
        <div>
          <h1 className="text-xl mb-1">Posted By</h1>
        <Link href={`/profile/${profile.username}`}>
        <div className=" flex  items-center gap-2 hover:text-primary-color hover:cursor-pointer">
            <img
              src={profile.profile_photo || default_profile_photo}
              className=" size-10 rounded-full "
              alt=""
            />
            <h1 className="text-2xl font-medium dark:text-white">
              {profile.username}
            </h1>
          </div>
        </Link>
        </div>
      </div>
    </section>
  );
}

export default PostInfo;
