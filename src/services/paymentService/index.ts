'use server';
import axiosInstance from '@/lib/axios-instance';
import { IPayment } from '@/types/payment.type';
import { TResponseRedux } from '@/types/response';

export const getCurrentUserPayments = async () => {
  try {
    const { data } = await axiosInstance.get(`/payments/current-user`);
    return data as TResponseRedux<IPayment[]>;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};
