'use client';
import AdminPostCard from '@/components/card/AdminPostCard';
import Pagination from '@/components/pagination/Pagination';
import SkeletonDashboardPostCard from '@/components/skeleton/SkeletonDashboardPostCard';
import { useGetPostsQuery } from '@/redux/api/post.api'
import React, { useState } from 'react'

 function page() {
  const [currentPage,setCurrentPage] = useState(1)
  const params = [
    {
      name:'limit',
      value:'6'
    },
    {
      name:'page',
      value:currentPage.toString()
    }
  ]
  const {data,isLoading,refetch} =  useGetPostsQuery(params)
  const posts = data?.data
  const meta = data?.meta 

  const handelPageChange = (page:number)=>{
      setCurrentPage(page)
      refetch()
  }
 
  
  return (
    <div>
        <h1 className="text-4xl dark:text-white font-medium">Manage Posts</h1>
      
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {  !isLoading ?

            posts?.map(post=>(
              <AdminPostCard post={post} key={post._id}/>
            ))
            :
            
              [1,2,3,5,6].map((_,index)=>(
                 <SkeletonDashboardPostCard key={index}/>
               ))
             
 }
        </div>
       <div className='mt-10 '>
      {
        !isLoading &&  <Pagination onChange={handelPageChange} pages={meta?.pages||[]} currentPage={meta?.page||0}/>
      }
       </div>
    </div>
  )
}

export default page