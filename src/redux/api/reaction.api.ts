import { TResponseRedux } from '@/types/response';
import { baseApi } from './baseApi';

const reactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostReaction: builder.query({
      query: (postId: string) => {
        return {
          url: `/post-reactions/post/${postId}`,
          method: 'GET',
        };
      },
      transformResponse: (
        response: TResponseRedux<{ upvote: number; downvote: number }>,
      ) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetPostReactionQuery } = reactionApi;
