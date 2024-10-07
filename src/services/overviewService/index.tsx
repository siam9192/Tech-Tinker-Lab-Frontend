'use server';
import axiosInstance from '@/lib/axios-instance';

export const getCurrentUserOverview = async () => {
  try {
    const { data } = await axiosInstance.get('/overview/current-user');
    return data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};


export const getPostOverview = async (postId:string,viewType:string)=>{
  try {
    const { data } = await axiosInstance.get(`/overview/post/${postId}?view_type=${viewType}`);
    return data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
}