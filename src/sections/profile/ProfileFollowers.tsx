'use client';
import FollowingCard from '@/components/card/FollowingCard';
import { useGetProfileFollowers } from '@/hooks/profile.hook';

import React from 'react';

function ProfileFollowers({ username }: { username: string }) {
  const { data: followers } = useGetProfileFollowers(username);
  return (
    <section className="">
      <h1 className="text-end  font-bold dark:text-white">
        Followers ({followers?.length})
      </h1>
      {followers?.length ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {followers?.map((user) => (
            <div key={user._id}>
              <FollowingCard user={user as any} />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="mt-10 text-2xl text-center">No Followers</h1>
      )}
    </section>
  );
}

export default ProfileFollowers;
