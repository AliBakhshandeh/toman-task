import { useQuery } from '@tanstack/react-query';
import { getPaymentDetails, getPayments } from './payment.ts';
import { PaymentDetailsResponse, PaymentParams, PaymentsResponse } from '@/types/payments.types.ts';
import { IPaymentsParams } from '@/types/payments.types';

export const usePaymentsList = ({
  page,
  search,
  type,
  status,
}: IPaymentsParams) => {
  return useQuery<PaymentsResponse, Error>({
    queryKey: ['payments', page,search,type,status],
    queryFn: () => getPayments({ page, search, type, status }),
  });
};

export const usePaymentDetails = ({id}: PaymentParams) => {
  return useQuery<PaymentDetailsResponse, Error>({
    queryKey: ['payments', id],
    queryFn: () => getPaymentDetails({id}),
  });
};