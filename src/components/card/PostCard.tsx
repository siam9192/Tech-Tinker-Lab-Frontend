'use client';
import { IPost } from '@/types'
import { formatTimeAgo } from '@/utils/func';
import React, { useEffect, useRef } from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { FaBookReader, FaRegComment } from 'react-icons/fa';
import { MdOutlineWorkspacePremium } from 'react-icons/md';

interface IPostCard {
    post:IPost
}

const PostCard = ({post}:IPostCard) => {
  const shortDesRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
      if(shortDesRef.current){
        shortDesRef.current.innerHTML = post.content.slice(0,100)
      }
  },[shortDesRef.current])
  return (
    <div className='p-5 bg-white dark:bg-[#2c2c2cf1] rounded-lg shadow space-y-5 flex flex-col'>
      <div className='flex  gap-2 items-center'>
        <img className='size-10 rounded-lg' src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" alt="" />
       <div className=''>
       <h1 className='text-xl font-medium'>{post.author.username}</h1>
       <p className='text-[1.rem]'>{formatTimeAgo(post.createdAt)}</p>
       </div>
      </div>

     <img className='rounded-lg' src="https://www.usnews.com/dims4/USNEWS/fb6e5fb/2147483647/crop/2000x1334+0+2/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg" alt="" />
     <div className=' flex-grow'>
       <h1 className=' text-2xl md:text-3xl font-bold dark:text-white'>{post.title}</h1>
      
     <div className='mt-5 flex items-center justify-between'>
     <div className='flex items-center gap-2 text-gray-600 dark:text-slate-50 text-xl'>
          <div className='flex items-center gap-1 text-xl'>
          <span>
          <AiFillLike />
          </span>
          <span>
            {post.total_upvote}
          </span>

          </div>
          <div className='flex items-center gap-1'>
          <span>
          <span><AiFillDislike/></span>
          </span>
          <span>
            {post.total_downvote}
          </span>

          </div>
          <div className='flex items-center gap-1'>
          <span>
          <span><FaBookReader /></span>
          </span>
          <span>
            {post.total_reader}
          </span>

          </div>
        </div>

        <button className='flex items-center gap-2 hover:bg-info-color duration-100 px-3 py-2 rounded-full hover:text-white'>
        <span className='text-2xl'>
        <FaRegComment />
        </span>
        <span>Add Comment</span>
        </button>
<span className='text-button-color text-2xl'>
<MdOutlineWorkspacePremium />
</span>
     </div>
 
     </div>
      
  
  
    </div>
  )
}

export default PostCard