import Posts from '@/sections/home/Posts';
import SearchHeader from '@/sections/home/SearchHeader';
import React from 'react';
import { PageProps } from '../../../.next/types/app/layout';

const MainLayoutMainPage = ({ searchParams }: PageProps) => {
  return (
    <div className="space-y-5">
      <SearchHeader searchParams={searchParams} />
      <div>
        <Posts searchParams={searchParams} />
      </div>
    </div>
  );
};

export default MainLayoutMainPage;
