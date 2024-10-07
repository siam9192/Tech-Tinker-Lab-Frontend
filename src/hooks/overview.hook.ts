import { getPostOverview } from "@/services/overviewService";
import { IOverviewData } from "@/types/overview.type";
import { useQuery } from "@tanstack/react-query";

export const useGetPostOverview = (postId: string,viewType:string) => {
    return useQuery<IOverviewData, Error>({
      queryKey: ['POST-BY-ID'],
      queryFn: async () => await getPostOverview(postId,viewType),
    });
  };