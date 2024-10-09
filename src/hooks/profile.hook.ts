import {
  getProfileFollowers,
  getProfileFollowings,
  getProfileFollowStatus,
  getProfilePosts,
} from '@/services/profileService';
import { IPost } from '@/types';
import { IUser } from '@/types/user.type';
import { useQuery } from '@tanstack/react-query';

export const useGetProfilePosts = (username: string) => {
  return useQuery<IPost[], Error>({
    queryKey: ['PROFILE-POSTS'],
    queryFn: async () => await getProfilePosts(username),
  });
};

export const useGetProfileFollowStatus = (username: string) => {
  return useQuery<boolean, Error>({
    queryKey: ['PROFILE-FOLLOW-STATUS'],
    queryFn: async () => await getProfileFollowStatus(username),
  });
};

export const useGetProfileFollowers = (username: string) => {
  return useQuery<IUser[], Error>({
    queryKey: ['PROFILE-FOLLOWERS'],
    queryFn: async () => await getProfileFollowers(username),
  });
};

export const useGetProfileFollowings = (username: string) => {
  return useQuery<IUser[], Error>({
    queryKey: ['PROFILE-FOLLOWINGS'],
    queryFn: async () => await getProfileFollowings(username),
  });
};
