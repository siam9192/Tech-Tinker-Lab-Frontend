import React from 'react';
import PostCreateModalOpenButton from '@/components/ui/PostCreateModalOpenButton';
import Logo from '@/components/ui/Logo';
import ResponsiveSidebar from '@/components/ui/ResponsiveSidebar';
import { getCurrentUser } from '@/services/authService';

const HomeHeader = async() => {
   const currentUser = await getCurrentUser()
  return (
    <section className="flex lg:flex-none justify-between items-center">
      <div className=" block lg:hidden flex  items-center gap-4">
        <ResponsiveSidebar />
        <Logo />
      </div>
      <div className="flex items-center gap-4">
        <PostCreateModalOpenButton  isUser={currentUser?true:false}/>
      </div>
    </section>
  );
};

export default HomeHeader;
