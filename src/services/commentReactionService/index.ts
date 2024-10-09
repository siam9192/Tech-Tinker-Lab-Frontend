'use server';

import axiosInstance from '@/lib/axios-instance';
import { IUserCommentReaction } from '@/types/comment.type';

import { cookies } from 'next/headers';

export const getCurrentUserCommentReactionOfPost = async (postId: string) => {
  try {
    const accessToken = cookies().get('accessToken');
    if (!accessToken) {
      throw new Error();
    }
    const { data } = await axiosInstance.get(
      `/comment-reactions/${postId}/current-user`,
    );
    return data.data as IUserCommentReaction[];
  } catch (error) {
    return [];
  }
};

export const upsertCommentReaction = async (reactionData: any) => {
  try {
    const accessToken = cookies().get('accessToken');
    if (!accessToken) {
      throw new Error('Something went wrong');
    }
    const { data } = await axiosInstance.post(
      `/comment-reactions/upsert`,
      reactionData,
    );
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
