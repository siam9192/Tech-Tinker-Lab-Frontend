import envConfig from '@/config/envConfig';
import { getNewAccessToken } from '@/services/authService';
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

axiosInstance.interceptors.response.use(function(response){
  return response
},async function(error){
  const config = error.config;
    console.log(error)
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      const res = await getNewAccessToken();
      const accessToken = res.data.accessToken;
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      cookies().set("accessToken", accessToken);
      return axiosInstance(config);
    } else {
      return Promise.reject(error);
    }
})

export default axiosInstance;
