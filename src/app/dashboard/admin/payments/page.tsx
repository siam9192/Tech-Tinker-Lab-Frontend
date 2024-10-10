'use client';
import Pagination from '@/components/pagination/Pagination';
import { useGetPayments } from '@/hooks/payment.hook';
import PaymentTable from '@/sections/dashboard/payments/PaymentTable';
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
    const {data,isLoading,refetch} = useGetPayments(params)
    const payments = data?.data||[]
    const meta =  data?.meta

    const handelPageChange = (page:number)=>{
      
        setCurrentPage(page)
        // queryClient.invalidateQueries(['PAYMENTS'])
        refetch()
    }
  return (
    <div>
        <h1 className='text-4xl font-medium dark:text-white'>Payments</h1>
        <div className='mt-10'>
        <PaymentTable payments={payments}/>
        </div>
      {
        !isLoading &&   <div className='mt-10'>
        <Pagination onChange={handelPageChange} currentPage={meta?.page||0} pages={meta?.pages||[]}/>
    </div>
      }
    </div>
  )
}

export default page