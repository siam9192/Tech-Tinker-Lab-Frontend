import { getUserLoginActivities, getUsers } from "@/services/userService";
import { TResponseRedux } from "@/types/response";
import { IUser } from "@/types/user.type";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
    return useQuery<TResponseRedux<IUser[]>, Error>({
      queryKey: ['USERS'],
      queryFn: async () => await getUsers(),
    });
  };
  

  export const useGetUserLoginActivities = (userId:string) => {
    return useQuery<Pick<IUser,'username'|'login_activities'>, Error>({
      queryKey: ['ACTIVITY'],
      queryFn: async () => await getUserLoginActivities(userId),
    });
  };
  