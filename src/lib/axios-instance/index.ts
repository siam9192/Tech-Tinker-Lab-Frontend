import envConfig from '@/config/envConfig';
import axios from 'axios';
import { cookies } from 'next/headers';

const axiosInstance = axios.create({
  baseURL: envConfig.base_api,
});

axiosInstance.interceptors.request.use(function (config) {
  const accessToken = cookies().get('accessToken')?.value;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default axiosInstance;
