export interface IPayment {
  _id: string;
  transaction_id: string;
  payer: string;
  status: string;
  method: string;
  amount: number;
  purchased_package: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
