// import { useMutation } from '@tanstack/react-query';
// import { FieldValues } from 'react-hook-form';
// import {
//   loginUser,
//   registerUser,
// } from '../services/authService';

import { getCurrentUser, getCurrentUserData } from "@/services/authService";
import { IUser } from "@/types/user.type";
import { useQuery } from "@tanstack/react-query";

// export const useUserRegistration = () => {
//   return useMutation<any, Error, FieldValues>({
//     mutationKey: ['USER_REGISTRATION'],
//     mutationFn: async (userData) => await registerUser(userData),

//   });
// };

// export const userUserLogin = () => {
//   return useMutation<any, Error, FieldValues>({
//     mutationKey: ['USER_LOGIN'],
//     mutationFn: async (loginInfo) => await loginUser(loginInfo),
//     onSuccess: () => {},
//     onError: (error) => {},
//   });
// };


export const userGetCurrentUserDecode = () => {
  return useQuery<any, Error>({
    queryFn:async()=>await getCurrentUser()
  });
};

export const userGetCurrentUserProfile = () => {
  return useQuery<IUser|null, Error>({
    queryFn:async()=>await getCurrentUserData()
  });
};