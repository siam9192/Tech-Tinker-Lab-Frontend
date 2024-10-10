import SearchHeader from '@/sections/home/SearchHeader';
import React from 'react';
import { PageProps } from '../../../.next/types/app/layout';
import dynamic from 'next/dynamic';
const Posts  = dynamic(()=>import('@/sections/home/Posts'),{ssr:false})
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
