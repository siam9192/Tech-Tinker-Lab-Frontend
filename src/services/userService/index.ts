'use server';

import axiosInstance from "@/lib/axios-instance";



export const changeAccountPassword= async (d:any) => {
    try {
      const { data } = await axiosInstance.patch(
        '/users/change-password',
        d
      );
      return data.data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.message || 'Some this went wrong');
    }
  };
  

  export const getUsers = async ()=>{
    try {
      const { data } = await axiosInstance.get(
        '/users',
      );
      return data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.message || 'Some this went wrong');
    }
  }
  
  export const getUserLoginActivities = async (userId:string)=>{
    try {
      const { data } = await axiosInstance.get(
        `/users/login-activities/${userId}`,
      );
      return data.data;
    } catch (error: any) {
        return null
    }
  }
  
  export const changeUserRole = async (payload:any)=>{
    try {
      const { data } = await axiosInstance.patch(
        `/users/change-role`,payload
      );
      return data.data;
    } catch (error: any) {
    
       throw new Error(error.message)
    }
  }

  export const changeUserBlockStatus = async (payload:any)=>{
    try {
      const { data } = await axiosInstance.patch(
        `/users/change-block-status`,payload
      );
      return data.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || 'Some this went wrong');
    }
  }
  