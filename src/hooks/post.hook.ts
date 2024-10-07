import { getCurrentUserPosts, getPostById } from '@/services/postService';
import { IPost } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useGetCurrentUserPosts = () => {
  return useQuery<any, Error>({
    queryKey: ['MY-POSTS'],
    queryFn: async () => await getCurrentUserPosts(),
  });
};

export const useGetPostById = (id: string) => {
  return useQuery<IPost, Error>({
    queryKey: ['POST-BY-ID'],
    queryFn: async () => await getPostById(id),
  });
};
