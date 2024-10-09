'use client';
import ProfileFollowers from '@/sections/profile/ProfileFollowers';
import ProfileFollowing from '@/sections/profile/ProfileFollowing';
import ProfilePosts from '@/sections/profile/ProfilePosts';
import React, { useState } from 'react';

function ProfileTabs({ username }: { username: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: 'Posts',
      component: ProfilePosts,
    },
    {
      title: 'Following',
      component: ProfilePosts,
    },
    {
      title: 'Follower',
      component: ProfilePosts,
    },
    {
      title: 'About',
      component: ProfilePosts,
    },
  ];

  return (
    <div className="mt-5 bg-white dark:bg-dark-light p-2 md:p-5 min-h-[60vh]">
      <div className="flex items-center gap-5 md:gap-10  overflow-x-auto md:overflow-hidden py-2">
        {tabs.map((tab, index) => (
          <button
            onClick={() => setActiveTab(index)}
            className={`text-xl md:text-2xl font-medium ${activeTab === index ? 'text-primary-color' : ''}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-5">
        {activeTab === 0 ? (
          <ProfilePosts username={username} />
        ) : activeTab === 1 ? (
          <ProfileFollowing username={username} />
        ) : activeTab === 2 ? (
          <ProfileFollowers username={username} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProfileTabs;
