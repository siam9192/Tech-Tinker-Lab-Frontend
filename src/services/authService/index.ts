'use server';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import axiosInstance from '@/lib/axios-instance';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';
import { TRole } from '@/types/global.type';
import { IUser } from '@/types/user.type';

export const signUpUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/signup', userData);
    if (data.success) {
      cookies().set('accessToken', data?.data?.accessToken);
      cookies().set('refreshToken', data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Some this went wrong');
  }
};

export const signInUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/signIn', userData);
    if (data.success) {
      cookies().set('accessToken', data?.data?.accessToken, {
        expires: new Date(Date.now() + 60 * 3600 * 1000),
      });
      cookies().set('refreshToken', data?.data?.refreshToken, {
        expires: new Date(Date.now() + 60 * 3600 * 1000),
      });
    }
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get('accessToken')?.value;
  if (accessToken)
    return jwtDecode(accessToken) as JwtPayload & { id: string; role: TRole };
  else return null;
};

export const userLogout = async () => {
  cookies().delete('accessToken');
  cookies().delete('refreshToken');
};

export const getCurrentUserAccessToken = async () => {
  const accessToken = cookies().get('accessToken')?.value;
  if (accessToken) {
    return accessToken;
  }
  return null;
};

export const getCurrentUserData = async () => {
  try {
    const { data } = await axiosInstance.get('/users/current-user');
    return data.data as IUser;
  } catch (error) {
    return null;
  }
};
