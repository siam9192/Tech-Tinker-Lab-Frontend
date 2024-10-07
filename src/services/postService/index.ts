'use server';

import axiosInstance from '@/lib/axios-instance';
import { IPost } from '@/types';
import { TResponseRedux } from '@/types/response';

export const createPost = async (postData: any) => {
  try {
    const { data } = await axiosInstance.post('/posts/create', postData);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};

export const getPostById = async (postId: string) => {
  try {
    const { data } = await axiosInstance.get(`/posts/by-id/${postId}`);
    return data.data as IPost;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};

export const getPostForRead = async (postId: string) => {
  try {
    const { data } = await axiosInstance.get(`/posts/user-read/${postId}`);
    return data.data as IPost;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};

export const getCurrentUserPosts = async () => {
  try {
    const { data } = await axiosInstance.get(`/posts/current-user`);
    return data.data as IPost[];
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};

export const deletePost = async (postId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/posts/${postId}`);
    return data as TResponseRedux<null>;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};

export const updatePost = async (postId: string, updateData: any) => {
  try {
    const { data } = await axiosInstance.put(`/posts/${postId}`, updateData);
    return data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};
