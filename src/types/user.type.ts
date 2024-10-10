import { JwtPayload } from 'jwt-decode';

export type TAddress = {
  city: string;
  state: string;
  country: string;
};

export type TStudy = {
  institute: string;
  degree?: string;
  fieldOfStudy?: string;
  startYear?: number;
  endYear?: number;
  status: 'Attending' | 'Graduated' | 'Dropped Out' | 'Completed';
  description?: string;
};



export type TLoginLocation = {
  city: string;
  region: string;
  country: string;
};

export type TDeviceInfo = {
  device: string;
  os?: string;
  browser?: string;
};

export type TLoginActivity = {
  device_info: TDeviceInfo;
  ip_address: string;
  location: TLoginLocation;
  login_date: string;
};



export interface IUser {
  _id: string;
  username: string;
  profile_photo: string | null;
  profile_cover_photo: string | null;
  personal_details: IPersonalDetails;
  email: string;
  role: string;
  total_post: number;
  total_follower: number;
  total_following: number;
  is_verified: boolean;
  is_blocked:boolean,
  is_deleted:boolean;
  login_activities:TLoginActivity[]
}

export interface IPersonalDetails {
  name: IName;
  date_of_birth: string;
  gender: string;
  address: any;
  study: any;
  profession: any;
  about: string;
  _id: string;
}

export interface IName {
  first_name: string;
  last_name: string;
  _id: string;
}

export interface IUserDecode extends JwtPayload {
  id: string;
  role: string;
}
