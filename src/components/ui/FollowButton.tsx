'use client'
import { useGetProfileFollowStatus } from '@/hooks/profile.hook';
import { getCurrentUser } from '@/services/authService';
import { followUser, unfollowUser } from '@/services/followService';
import { errorToast, successToast } from '@/utils/toast';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useId, useState } from 'react'
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";
 function FollowButton({username,userId}:{username:string,userId:string}) {
  const [currentUser,setCurrentUser] = useState<any|null>(null)
   const router = useRouter()
   const pathname = usePathname()

  useEffect(()=>{
    getCurrentUser().then(data=>setCurrentUser(data))
  },[])
   
  const {data:isFollowing,refetch} = useGetProfileFollowStatus(username)

  const handelFollow = async()=>{
    if(!currentUser){
         router.push(`/auth/sign-in?redirect_url=${pathname.split('/')[1]}`)
    }
  const res =  await followUser({follow_user:userId})
  if(res.success){
    refetch()
    successToast(`Following ${username}`)
  }
  else{
       errorToast('Something went wrong')
  }

  }

  
   const handelUnFollow = async()=>{
    if(!currentUser){
      router.push(`/auth/sign-in?redirect_url=${pathname.split('/')[1]}`)
 }
const res =  await unfollowUser({unfollow_user:userId})

if(res.success){
 refetch()
 successToast(`Unfollowed ${username}`)
 
}
else{
    errorToast('Something went wrong')
}

   }
  

  return (
  <>
    {
      isFollowing ?
      <button onClick={handelUnFollow} className='flex items-center justify-center gap-1 px-4 py-2 bg-button-color hover:bg-primary-color rounded-full duration-200 text-white text-xl w-1/2 '>
    <SlUserFollowing />
    
    <span>Following</span>
   </button>
      :
      <button onClick={handelFollow} className='flex items-center justify-center gap-1 px-4 py-2 bg-primary-color hover:bg-button-color rounded-full duration-200 text-white text-xl w-1/2 '>

      <SlUserFollow />
    
    <span>Follow</span>
   </button>
    }
  </>
  )
}

export default FollowButton