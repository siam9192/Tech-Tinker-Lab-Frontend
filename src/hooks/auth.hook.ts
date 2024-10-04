import { useMutation } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import {
  loginUser,
  registerUser,
} from '../services/authService';




export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ['USER_REGISTRATION'],
    mutationFn: async (userData) => await registerUser(userData),
  
   
  });
};
 

export const userUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ['USER_LOGIN'],
    mutationFn: async (loginInfo) => await loginUser(loginInfo),
    onSuccess: () => {},
    onError: (error) => {},
  });
};
