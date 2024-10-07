'use client';
import { default_profile_photo } from '@/utils/constant';
import { useRouter } from 'next/navigation';

import React from 'react';
interface IProfileImage {
  image_url: string | null;
  username?: string;
  isVerified?: boolean;
  href?: string;
}

const ProfileImage = ({
  image_url,
  username,
  isVerified,
  href,
}: IProfileImage) => {
  const router = useRouter();
  const handelClick = () => {
    if (href) {
      router.push(href);
    }
  };
  return (
    <div onClick={handelClick} className="flex items-center gap-1 relative">
      <img
        className="size-12 rounded-full border p-1"
        src={image_url || default_profile_photo}
        alt=""
      />
      {username && <h4>{username}</h4>}
      <img
        className=" h-4 w-6 absolute bottom-2 -right-2"
        src="/images/verified.png"
        alt=""
      />
    </div>
  );
};

export default ProfileImage;
