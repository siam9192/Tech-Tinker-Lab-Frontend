import { BaseQueryApi } from '@reduxjs/toolkit/query';

export type TResponse<T> = {
  data?: T;
  meta?: TMeta;
  error?: TError;
  success: boolean;
  message: string;
};

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
  pages: number[];
};

export type TParam = {
  name: string;
  value: string | null | undefined;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
