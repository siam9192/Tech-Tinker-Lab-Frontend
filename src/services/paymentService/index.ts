'use server';
import axiosInstance from '@/lib/axios-instance';
import { IPayment } from '@/types/payment.type';
import { TParam, TResponseRedux } from '@/types/response';
import { formatSearchParam } from '@/utils/func';

export const getCurrentUserPayments = async (params:TParam[]) => {
  const searchparams= formatSearchParam(params)
  try {
    const { data } = await axiosInstance.get(`/payments/current-user?${searchparams}`);
    return data as TResponseRedux<IPayment[]>;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};


export const getPayments = async (params:TParam[]) => {
  const searchparams = formatSearchParam(params)
  try {
    const { data } = await axiosInstance.get(`/payments?${searchparams}`);
    return data as TResponseRedux<IPayment[]>;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};
