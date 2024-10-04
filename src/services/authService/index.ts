'use server';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import axiosInstance from '@/lib/axios-instance';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';
import { TRole } from '@/types/global.type';


export const signUpUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/sign-up', userData);
    if (data.success) {
      cookies().set('accessToken', data?.data?.accessToken);
      cookies().set('refreshToken', data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};




export const signInUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/sign-in', userData);
    if (data.success) {
      cookies().set('accessToken', data?.data?.accessToken);
      cookies().set('refreshToken', data?.data?.refreshToken);
      
    }
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get('accessToken')?.value;

  if (accessToken)
    return jwtDecode(accessToken) as JwtPayload & { role: TRole };
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
