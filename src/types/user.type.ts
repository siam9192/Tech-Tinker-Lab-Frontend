import { JwtPayload } from "jwt-decode";

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
}

export interface IPersonalDetails {
  name: IName;
  date_of_birth: string;
  gender: string;
  address: any;
  study: any;
  profession: any;
  about:string
  _id: string;
}

export interface IName {
  first_name: string;
  last_name: string;
  _id: string;
}


export interface IUserDecode extends JwtPayload {
  id:string,
  role:string
}