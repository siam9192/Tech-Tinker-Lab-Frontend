import {  getProfileFollowStatus, getProfilePosts } from "@/services/profileService";
import { IPost } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetProfilePosts = (username: string) => {
    return useQuery<IPost[], Error>({
      queryKey:['PROFILE-POSTS'],
      queryFn: async () => await getProfilePosts(username),
    });
  };

  export const useGetProfileFollowStatus = (username: string) => {
    return useQuery<boolean, Error>({
      queryKey:['PROFILE-FOLLOW-STATUS'],
      queryFn: async () => await getProfileFollowStatus(username),
    });
  };


  