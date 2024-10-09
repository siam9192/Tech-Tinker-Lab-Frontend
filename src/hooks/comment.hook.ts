import { getPostComments } from '@/services/commentService';
import { IComment } from '@/types/comment.type';
import { TResponseRedux } from '@/types/response';
import { useQuery } from '@tanstack/react-query';

export const useGetPostComments = (postId: string) => {
  return useQuery<TResponseRedux<IComment[]>, Error>({
    queryKey: ['POST-COMMENTS'],
    queryFn: async () => await getPostComments(postId),
  });
};
