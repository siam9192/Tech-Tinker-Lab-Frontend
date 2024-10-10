import { getUserActivities } from "@/services/userActivities";
import { TParam, TResponseRedux } from "@/types/response";
import { IUserActivity } from "@/types/user-activity.type";
import { useQuery } from "@tanstack/react-query";

export const useGetUserActivities = (params:TParam[]) => {
    return useQuery<TResponseRedux<IUserActivity[]>, Error>({
      queryKey: ['ACTIVITY'],
      queryFn: async () => await getUserActivities(params),
    });
  };
  