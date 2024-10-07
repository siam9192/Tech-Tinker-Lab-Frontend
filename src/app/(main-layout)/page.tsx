
import Posts from '@/sections/home/Posts';
import SearchHeader from '@/sections/home/SearchHeader';
import React from 'react';

const MainLayoutMainPage = () => {
  return (
    <div className="space-y-5 p-2 md:p-10">
      <SearchHeader />
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default MainLayoutMainPage;
