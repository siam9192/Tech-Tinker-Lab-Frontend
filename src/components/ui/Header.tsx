import React from 'react';
import ProfileImage from './ProfileImage';
import { GoBell } from 'react-icons/go';
import { AiFillMessage } from 'react-icons/ai';
import PostCreateModalOpenButton from './PostCreateModalOpenButton';
import { getCurrentUserData } from '@/services/authService';
import { LuLayoutDashboard } from 'react-icons/lu';
import Link from 'next/link';

async function Header() {
  const currentUser = await getCurrentUserData();

  return (
    <header className="px-4 py-6 md:py-8 flex justify-between items-center  bg-white dark:bg-dark-light sticky top-0 shadow rounded-lg z-30">
      <PostCreateModalOpenButton />
      <div className="flex items-center gap-4">
        <button className="bg-button-color text-wrap p-2 rounded-full text-3xl relative">
          <AiFillMessage />
          <span className="size-4 rounded-full bg-red-600 absolute right-0 -top-1"></span>
        </button>
        <button className="bg-button-color text-wrap p-2 rounded-full text-3xl relative">
          <GoBell />
          <span className="size-4 rounded-full bg-red-600 absolute right-0 -top-1"></span>
        </button>

        {currentUser && (
          <Link href={`/dashboard/${currentUser?.role.toLowerCase()}`}>
            <button className=" bg-gray-50 dark:bg-dark-mode dark:text-primary-color text-wrap p-2 rounded-full text-3xl relative d">
              <LuLayoutDashboard />
            </button>
          </Link>
        )}
        <ProfileImage image_url={currentUser?.profile_photo!} href="/profile" />
      </div>
    </header>
  );
}

export default Header;
