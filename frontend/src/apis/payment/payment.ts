import { PaymentDetailsResponse, PaymentParams, PaymentsResponse ,IPaymentsParams } from '@/types/payments.types';
import axiosInstance from '@/utils/axios';
import { toast } from 'sonner';
import { cleanObj } from '@/utils';

export const getPayments = async ({
  page,
  search,
  type,
  status,
  limit
}: IPaymentsParams): Promise<PaymentsResponse> => {
  try {
    const response = await axiosInstance.get('/payments', {
      params: cleanObj({
        page,
        search,
        type: type?.join(','),
        status: status?.join(','),
        limit: limit?.value,
      }),
    });
    return response.data;
  } catch (error) {
    toast.error('Something went wrong!');
    throw error;
  }
};

export const getPaymentDetails = async ({id}: PaymentParams): Promise<PaymentDetailsResponse> => {
  try {
    const response = await axiosInstance.get(`/payments/${id}`);
    return response.data;
  } catch (error) {
    toast.error('Something went wrong!');
    throw error;
  }
}