import { getCurrentUserPayments, getPayments } from "@/services/paymentService";
import { IPayment } from "@/types/payment.type";
import { TParam, TResponseRedux } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const useGetPayments =  (params:TParam[]) => {
    return useQuery<TResponseRedux<IPayment[]>, Error>({
      queryKey: ['PAYMENTS'],
      queryFn: async () => await getPayments(params),
    });
  };


  export const useGetCurrentUserPayments =  (params:TParam[]) => {
    return useQuery<TResponseRedux<IPayment[]>, Error>({
      queryKey: ['PAYMENTS'],
      queryFn: async () => await getCurrentUserPayments(params),
    });
  };