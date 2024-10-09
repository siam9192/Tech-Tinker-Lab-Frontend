'use client';
import FollowingCard from '@/components/card/FollowingCard';
import { useGetProfileFollowings } from '@/hooks/profile.hook';

import React from 'react';

function ProfileFollowing({ username }: { username: string }) {
  const { data: followings } = useGetProfileFollowings(username);
  return (
    <section className="">
      <h1 className="text-end  font-bold dark:text-white">
        Following ({followings?.length})
      </h1>
      {followings?.length ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {followings?.map((user) => (
            <div key={user._id}>
              <FollowingCard user={user as any} />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="mt-10 text-2xl text-center">No One</h1>
      )}
    </section>
  );
}

export default ProfileFollowing;
