'use client';
import PostCard from '@/components/card/PostCard'
import { userGetCurrentUserDecode } from '@/hooks/auth.hook';

import { useGetProfilePosts } from '@/hooks/profile.hook';

import React from 'react'

function ProfilePosts({username}:{username:string}) {
  const {data} = useGetProfilePosts(username)
  const {data:currentUser} = userGetCurrentUserDecode()
  const posts = data||[]
console.log(posts)
  return (
    <section>
       <div  className='grid  grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
       {
        posts.map(post=>(
            <PostCard post={post} key={post._id} currentUser={currentUser}/>
        ))
       }
       </div>
    </section>
  )
}

export default ProfilePosts