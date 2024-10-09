import { IUser } from '@/types/user.type';
import { default_cover_photo } from '@/utils/constant';
import Link from 'next/link';
import React, { use } from 'react';

interface IFollowingCardProps {
  user: IUser;
}
function FollowingCard({ user }: IFollowingCardProps) {
  return (
    <Link href={`/profile/${user.username}`}>
      <div className="flex justify-between items-center hover:bg-gray-100 p-2 hover:cursor-pointer">
        <div className="flex items-center gap-5  dark:text-white">
          <img
            src={user.profile_photo || default_cover_photo}
            alt=""
            className=" size-14 lg:size-20 rounded-full"
          />
          <div>
            <h3 className="font-medium">{user.username}</h3>
            <h4>{user.total_follower} Followers</h4>
          </div>
        </div>
        <button></button>
      </div>
    </Link>
  );
}

export default FollowingCard;
