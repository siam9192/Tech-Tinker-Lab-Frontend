import { getCurrentUserPayments } from '@/services/paymentService';
import React from 'react';
import PaymentHistoryTable from './PaymentHistoryTable';
import Pagination from '@/components/pagination/Pagination';

async function page() {
  let data;
  try {
    data = await getCurrentUserPayments();
  } catch (error) {
    return <h1>Something went wrong</h1>;
  }
  const payments = data.data || [];
  const meta = data.meta;
  const current_page = meta?.page;
  const pages = meta?.pages;
  const handelPageChange = ()=>{

  }
  return (
    <div>
      <h1 className="text-4xl dark:text-white font-medium">Payment History</h1>
      <div className="mt-20">
        <PaymentHistoryTable payments={payments} />
        <div className="mt-5">
          <Pagination onChange={handelPageChange} pages={pages || []} currentPage={current_page!} />
        </div>
      </div>
    </div>
  );
}

export default page;
