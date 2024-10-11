'use server';
import axiosInstance from '@/lib/axios-instance';

export const followUser = async (bodyData: any) => {
  
  try {
    const { data } = await axiosInstance.post('/followers/follow', bodyData);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const unfollowUser = async (bodyData: any) => {
  try {
    const { data } = await axiosInstance.post('/followers/unfollow', bodyData);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};
