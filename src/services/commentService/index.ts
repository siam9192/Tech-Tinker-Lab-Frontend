'use server';
import axiosInstance from '@/lib/axios-instance';
import { IComment } from '@/types/comment.type';
import { TResponseRedux } from '@/types/response';

export const getPostComments = async (postId: string) => {
  try {
    const { data } = await axiosInstance.get(`/comments/post/${postId}`);
    return data as TResponseRedux<IComment[]>;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const postComment = async (commentData: any) => {
  try {
    const { data } = await axiosInstance.post(`/comments`, commentData);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const deleteComment = async (commentId:string)=>{
  try {
    const { data } = await axiosInstance.delete(`/comments/${commentId}`);
    return data;
  } catch (error: any) {
   throw new Error(error?.response?.data.message)
  }
}