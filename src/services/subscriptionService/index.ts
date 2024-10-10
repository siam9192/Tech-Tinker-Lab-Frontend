'use server';
import axiosInstance from '@/lib/axios-instance';

export const subscribePackage = async (subscriptionData: any) => {
  try {
    const { data } = await axiosInstance.post(
      '/subscriptions/package/payment',
      subscriptionData,
    );
    return data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};

export const getCurrentUserLatestSubscription = async () => {
  try {
    const { data } = await axiosInstance.get(
      '/subscriptions/latest-subscription/current-user',
    );
    return data.data;
  } catch (error: any) {
    
   return null
  }
};

