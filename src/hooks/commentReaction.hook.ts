import { getCurrentUserCommentReactionOfPost } from '@/services/commentReactionService';
import { IUserCommentReaction } from '@/types/comment.type';
import { useQuery } from '@tanstack/react-query';

export const useGetCurrentUserCommentReactions = (postId: string) => {
  return useQuery<IUserCommentReaction[], Error>({
    queryKey: ['CURRENT-USER-COMMENT-REACTION-POST'],
    queryFn: async () => await getCurrentUserCommentReactionOfPost(postId),
  });
};
