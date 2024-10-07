'use client';
import FollowingCard from '@/components/card/FollowingCard';
import { usersFakeData } from '@/data/User';

import React from 'react'

function ProfileFollowing({username}:{username:string}) {
    // const {data} = useGetProfileFollowers(username)
    const followingUsers = usersFakeData
  return (
   <section className=''>
    <h1 className='text-end  font-bold dark:text-white'>Following ({followingUsers.length})</h1>
   <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
   {
    followingUsers.map(user=>(
      <div key={user._id}>
          <FollowingCard user={user as any}/>
      </div>
    ))
  }
   </div>
   </section>
  )
}

export default ProfileFollowing