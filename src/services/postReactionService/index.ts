'use server';

import axiosInstance from '@/lib/axios-instance';

export const getPostReactionOfCurrentUser = async (postId: string) => {
  try {
    const { data } = await axiosInstance.get(
      `/post-reactions/${postId}/current-user`,
    );
    return data.data as { vote_type: 'UP' | 'DOWN' | null };
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};

export const upsertPostReaction = async (reactionData: any) => {
  try {
    const { data } = await axiosInstance.post(
      `/post-reactions/upsert`,
      reactionData,
    );
    return data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};
