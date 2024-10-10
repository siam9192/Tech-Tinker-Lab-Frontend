import { IPayment } from '@/types/payment.type'
import React from 'react'

function PaymentTable({payments}:{payments:IPayment[]}) {
    const tableHeads = [
        'Transaction ID',
        'Amount',
        'Method',
        'Date',
        'Status'
    ]
   
  return (
    <div className="overflow-x-auto  p-5 md:p-10  bg-white dark:bg-dark-light shadow dark:text-white text-black ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        {
            tableHeads.map(head=><th key={head} className='dark:text-white text-black text-xl '>{head}</th>)
        }
      
      </tr>
    </thead>
    <tbody>
   
      {
        payments.map(payment=>(
            <tr key={payment._id} className='hover:bg-dark-mode'>
        <th>{payment._id}</th>
        <td>{payment.amount}</td>
        <td>{payment.method}</td>
        <td>{new Date(payment.createdAt).toUTCString()}</td>
        <td >
            <span className={`${payment.status === 'SUCCESS'?'bg-green-400':payment.status==='PENDING'?'bg-amber-400':'bg-red-600'} p-0.5 text-[0.8rem] rounded-full`}>
            {payment.status}
            </span>
          
            </td>
      </tr>
        ))
      }
   
    </tbody>
  </table>
</div>
  )
}

export default PaymentTable