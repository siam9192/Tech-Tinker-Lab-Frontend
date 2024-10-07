import { TResponseRedux } from '@/types/response';
import { baseApi } from './baseApi';
import { IPost } from '@/types';

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: `/posts`,
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<IPost[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ['POST'],
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
