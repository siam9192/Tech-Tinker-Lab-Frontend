'use client';
import React, { useState } from 'react';
import PaymentHistoryTable from './PaymentHistoryTable';
import Pagination from '@/components/pagination/Pagination';
import { useGetCurrentUserPayments } from '@/hooks/payment.hook';

 function page() {
  const [currentPage,setCurrentPage] = useState(1)
  const params = [
    {
      name:'page',
      value:currentPage.toString()
    }
  ]
  const {data,refetch} = useGetCurrentUserPayments(params)
  const payments = data?.data || [];
  const meta = data?.meta;
  const pages = meta?.pages;

  const handelPageChange = (page:number)=>{
    setCurrentPage(page)
    refetch()
  }
  return (
    <div>
      <h1 className="text-4xl dark:text-white font-medium">Payment History</h1>
      <div className="mt-20">
        <PaymentHistoryTable payments={payments} />
        <div className="mt-5">
          <Pagination onChange={handelPageChange} pages={pages || []} currentPage={currentPage!} />
        </div>
      </div>
    </div>
  );
}

export default page;
