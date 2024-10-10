'use client';
import UserCard from '@/components/card/UserCard';
import { useGetUsers } from '@/hooks/user.hook';
import React, { use } from 'react'

function page() {
  const {data,isLoading} = useGetUsers()
  const users = data?.data||[]
 
  return (
    <div>
        <h1 className='text-4xl font-medium dark:text-white'>Manage Users</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
        {
       users.map(user=>(
        <UserCard user={user} key={user._id}/>
       ))
        }
        </div>
    </div>
  )
}

export default page