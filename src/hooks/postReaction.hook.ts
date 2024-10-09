import { getPostReactionOfCurrentUser } from '@/services/postReactionService';
import { useQuery } from '@tanstack/react-query';

export const useGetPostReactionOfCurrentUser = (postId: string) => {
  return useQuery<{ vote_type: 'UP' | 'DOWN' | null }, Error>({
    queryKey: ['POST-REACTION'],
    queryFn: async () => await getPostReactionOfCurrentUser(postId),
  });
};
