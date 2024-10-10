import { IUser } from "./user.type";

export interface IUserActivity {
    _id: string;
    type: string;
    browser: string;
    ip_address: string;
    user:IUser,
    createdAt: string;
    updatedAt: string;
    __v: number;
  }