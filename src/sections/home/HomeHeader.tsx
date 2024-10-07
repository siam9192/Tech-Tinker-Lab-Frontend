import React from 'react';
import FollowingUsers from './FollowingUsers';
import PostCreateModalOpenButton from '@/components/ui/PostCreateModalOpenButton';
import Logo from '@/components/ui/Logo';
import ResponsiveSidebar from '@/components/ui/ResponsiveSidebar';

const HomeHeader = () => {
  return (
    <section className="flex lg:flex-none justify-between items-center">
      <div className=" block lg:hidden flex  items-center gap-4">
        <ResponsiveSidebar />
        <Logo />
      </div>
      <div className="flex items-center gap-4">
        <PostCreateModalOpenButton />
      </div>
    </section>
  );
};

export default HomeHeader;
