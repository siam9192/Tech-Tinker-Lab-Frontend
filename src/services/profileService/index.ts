'use server'

import axiosInstance from "@/lib/axios-instance"
import { IPost } from "@/types";
import { IUser } from "@/types/user.type";



export const getUserProfile = async (username: string) => {
    try {
      const { data } = await axiosInstance.get(`/users/profile/${username}`);
      return data.data as IUser;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || 'Some this went wrong');
    }
  };


export const getProfilePosts = async (username:string)  => {
    try {
      const { data } = await axiosInstance.get(`/posts/profile/${username}`);
      return data.data as IPost[]
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || 'Some this went wrong');
    }
  };

export const getProfileFollowers = async (username:string)=>{
  try {
    const { data } = await axiosInstance.get(`/followers/profile/${username}`);
    return data.data as IPost[]
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
}

export const getProfileFollowStatus = async (username:string)=>{
  try {
    const { data } = await axiosInstance.get(`/followers/current-user/account-follow-status/${username}`);
    return data.data.status as boolean
  } catch (error: any) {
    return false
  }
}


export const updateProfile = async (updatedData:any)=>{
  try {
    const { data } = await axiosInstance.patch(`/users/update-profile`,updatedData);
    return data
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
}
