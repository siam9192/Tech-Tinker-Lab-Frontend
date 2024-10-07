'use client';
import { IPost } from '@/types';
import { formatTimeAgo } from '@/utils/func';
import React, { useEffect, useRef } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import {
  FaBookReader,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaRegComment,
} from 'react-icons/fa';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import ProfileImage from '../ui/ProfileImage';
import { IUser } from '@/types/user.type';
import { useDispatch } from 'react-redux';
import { toggleSubscriptionPurchaseModal } from '@/redux/features/toggle.slice';
import { useRouter } from 'next/navigation';

interface IPostCard {
  currentUser: IUser|null;
  post: IPost;
}

const PostCard = ({ currentUser, post }: IPostCard) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const shortDesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (shortDesRef.current) {
      shortDesRef.current.innerHTML = post.content.slice(0, 100);
    }
  }, [shortDesRef.current]);

  const handelClick = () => {
    // If user is not logged in then navigate user to login page
    if (!currentUser) {
      return router.push('/auth/sign-in');
    }

    // If user is not verified then show package subscription pop up
    else if (post.is_premium && !currentUser?.is_verified) {
      return dispatch(toggleSubscriptionPurchaseModal(true));
    }
    return router.push(`/post/${post._id}`);
  };
  const defaultShowWord = 60;
  const postTitle = post.title;
  return (
    <div
      onClick={handelClick}
      className=" hover:cursor-pointer p-5 bg-white dark:bg-dark-light rounded-lg shadow space-y-5 flex flex-col"
    >
      <div onClick={(e)=>e.stopPropagation()} className="flex  gap-2 items-center">
        <ProfileImage
          image_url={post.author.profile_photo}
          isVerified={post.author.is_verified}
          href={`/profile/${post.author.username}`}
        />
        <div className="">
          <h1 className="text-xl font-medium dark:text-white">
            {post.author.username}
          </h1>
          <p className="text-[0.8rem] dark:text-white">
            {formatTimeAgo(post.createdAt)}
          </p>
        </div>
      </div>

      <img className="rounded-lg h-60" src={post.thumbnail} alt="" />
      <div className=" flex-grow space-y-1">
        <div className="text-end">
          <span className="px-4 py-1 rounded-full  bg-info-color text-white text-[0.8rem]">
            {post.category}
          </span>
        </div>
        <h1 className="text-2xl font-medium dark:text-white">
          {postTitle.length > defaultShowWord
            ? postTitle.slice(0, defaultShowWord) + '..'
            : postTitle}
        </h1>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600 dark:text-slate-50 text-xl">
          <div className="flex items-center gap-1 text-xl">
            <span>
              <FaLongArrowAltUp />
            </span>
            <span>{post.total_upvote}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <span>
                <FaLongArrowAltDown />
              </span>
            </span>
            <span>{post.total_downvote}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <span>
                <FaBookReader />
              </span>
            </span>
            <span>{post.total_reader}</span>
          </div>
        </div>

        <button className="flex items-center gap-2 duration-100 px-3 py-2 rounded-full dark:text-white">
          <span className="text-2xl">
            <FaRegComment />
          </span>
          <span>Comments({post.total_comment || 0})</span>
        </button>
        {/* If post is premium then show it (Premium icon) */}
        {post.is_premium && (
          <span className="text-button-color text-2xl">
            <MdOutlineWorkspacePremium />
          </span>
        )}
      </div>
    </div>
  );
};

export default PostCard;
