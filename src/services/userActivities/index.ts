'use server';

import axiosInstance from "@/lib/axios-instance";
import { TParam } from "@/types/response";
import { formatSearchParam } from "@/utils/func";


export const getUserActivities =async (params:TParam[]) => {
    try {
        const searchParams = formatSearchParam(params)
      const { data } = await axiosInstance.get(
        `/user-activities?${searchParams}`
      );
      return data
      ;
    } catch (error: any) {
        console.log(error)
   
      throw new Error(error?.response?.data?.message || 'Some this went wrong');
    }
  };
  