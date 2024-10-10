'use client';
import Pagination from '@/components/pagination/Pagination';
import { useGetUserActivities } from '@/hooks/userActivity.hook'
import UserActivityTable from '@/sections/dashboard/user-activities/UserActivityTable'
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'

function page() {
    const [currentPage,setCurrentPage] = useState(1)
    const queryClient = useQueryClient()
    const params = [
        {
            name:'page',
            value:currentPage.toString()
        }
    ]
    const {data,refetch,isFetching} = useGetUserActivities(params)
    const activities = data?.data||[]
    const meta = data?.meta

   const handelPageChange = (page:number)=>{
    refetch()
    setCurrentPage(page)
   }

  return (
    <div>
         <h1 className='text-4xl font-medium dark:text-white'>User Activities</h1>

        <div className='mt-20  p-5 md:p-10  bg-white dark:bg-dark-light shadow dark:text-white text-black min-h-[60vh] '>
        {
            isFetching ?

            <h1>Loading</h1>
            :
            <UserActivityTable activities={activities} />
        }
        </div>
        <div className='mt-10'>
        <Pagination onChange={handelPageChange} currentPage={currentPage} pages={meta?.pages||[]}/>
        </div>
    </div>
  )
}

export default page