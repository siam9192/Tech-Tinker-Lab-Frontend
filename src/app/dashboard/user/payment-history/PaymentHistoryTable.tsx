import { IPayment } from '@/types/payment.type';
import React from 'react';
interface IPaymentHistoryProps {
  payments: IPayment[];
}
function PaymentHistoryTable({ payments }: IPaymentHistoryProps) {
  return (
    <div className="overflow-x-auto mt-10 p-5 dark:bg-dark-light shadow min-h-[50vh]  dark:text-white">
      <table className="table table-xs">
        <thead>
          <tr>
            <th className="text-xl dark:text-gray-300">TRX ID</th>
            <th className="text-xl dark:text-gray-300">Amount</th>
            <th className="text-xl dark:text-gray-300">Method</th>
            <th className="text-xl dark:text-gray-300">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr>
              <td className="py-5 text-[1.2rem]">{payment._id}</td>
              <td className="py-5 text-[1.2rem]">{payment.amount}</td>
              <td className="py-5 text-[1.2rem]">{payment.method}</td>
              <td className="py-5 text-[1.2rem]">
                {new Date(payment.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentHistoryTable;
