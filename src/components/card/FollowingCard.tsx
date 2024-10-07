import { IUser } from '@/types/user.type'
import Link from 'next/link'
import React, { use } from 'react'

interface IFollowingCardProps {
  user:IUser
} 
function FollowingCard({user}:IFollowingCardProps) {
    const personal_details = user.personal_details
 const full_name = personal_details.name.first_name +' ' + personal_details.name.last_name||''
  return (
  <Link href={`/profile/${user.username}`}>
   <div className='flex justify-between items-center hover:bg-gray-100 p-2 hover:cursor-pointer'>
     <div className='flex items-center gap-5  dark:text-white'>
        <img src="https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8fDA%3D" alt="" className=' size-14 lg:size-20 rounded-full' />
        <div>
            <h1 className='text-xl font-bold dark:text-white'>{full_name}</h1>
            <h3 className='font-medium'>{user.username}</h3>
            <h4>{user.total_follower} Followers</h4>
        </div>
    </div>
    <button></button>
   </div>
  </Link>
  )
}

export default FollowingCard