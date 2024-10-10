import { TParam } from '@/types/response';
import axios from 'axios';

export function formatTimeAgo(timestamp: string) {
  const now = new Date().valueOf();
  const then = new Date(timestamp).valueOf();

  const diffInSeconds = Math.floor((now - then) / 1000);

  const units = [
    { label: 'year', value: 60 * 60 * 24 * 365 },
    { label: 'month', value: 60 * 60 * 24 * 30 },
    { label: 'day', value: 60 * 60 * 24 },
    { label: 'hour', value: 60 * 60 },
    { label: 'minute', value: 60 },
    { label: 'second', value: 1 },
  ];

  for (const unit of units) {
    const amount = Math.floor(diffInSeconds / unit.value);
    if (diffInSeconds >= unit.value) {
      return `${amount} ${unit.label}s ago`;
    }
  }

  return 'just now';
}

export const formatSearchParam = (params: TParam[]) => {
  if (typeof params === undefined) {
    params = [];
  }

  const searchParam = new URLSearchParams();
  params?.forEach((item) => {
    if (item.value) {
      searchParam.append(item.name, item.value);
    }
  });
  return searchParam.toString();
};


export const getActivityInfo = async()=>{
  var userAgent = navigator.userAgent;
   
   let Browser;

  if (userAgent.indexOf("Firefox") > -1) {
   Browser =  "Mozilla Firefox";
  } else if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg") === -1 && userAgent.indexOf("OPR") === -1) {
    Browser =  "Google Chrome";
  } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
    Browser =  "Apple Safari";
  } else if (userAgent.indexOf("Edg") > -1) {
    Browser =  "Microsoft Edge";
  } else if (userAgent.indexOf("OPR") > -1 || userAgent.indexOf("Opera") > -1) {
   Browser = "Opera";
  } else if (userAgent.indexOf("Trident") > -1) {
    Browser = "Internet Explorer";
  } else {
    Browser =  "Unknown Browser";
  }
   const {data} = await axios.get('https://api.ipify.org/?format=json')
   const ip_address = data.ip
  return {
    browser:Browser,
    ip_address
  }
}



