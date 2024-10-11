'use server';
import axiosInstance from '@/lib/axios-instance';

export const subscribePackage = async (subscriptionData: any) => {
  try {
    console.log(subscriptionData)
    const { data } = await axiosInstance.post(
      '/subscriptions/package/payment',
      subscriptionData,
    );
   console.log(data)
    return data.data;
  } catch (error: any) {
    console.log(error)
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

