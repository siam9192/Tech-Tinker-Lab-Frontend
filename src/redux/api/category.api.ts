import { TResponseRedux } from '@/types/response';
import { baseApi } from './baseApi';
import { ICategory } from '@/types/category.type';

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: `/categories`,
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<ICategory[]>) => ({
        data: response.data,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
