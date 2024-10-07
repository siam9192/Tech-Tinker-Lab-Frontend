import MyPostTable from '@/sections/dashboard/my-posts/MyPostTable';
import React from 'react';

function page() {
  return (
    <div>
      <h1 className="text-4xl dark:text-white font-medium">My Posts</h1>
      <MyPostTable />
    </div>
  );
}

export default page;
