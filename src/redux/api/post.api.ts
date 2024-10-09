import { TParam, TResponseRedux } from '@/types/response';
import { baseApi } from './baseApi';
import { IPost } from '@/types';
import { formatSearchParam } from '@/utils/func';

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (params: TParam[]) => {
        const searchParam = formatSearchParam(params);
        return {
          url: `/posts?${searchParam}`,
          method: 'GET',
        };
      },
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
