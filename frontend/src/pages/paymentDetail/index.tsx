import { usePaymentDetails } from '@/apis/payment/payment.rq';
import { getStatusColor } from '@/pages/payments/utils';
import { formatDate } from '@/utils';
import { useParams } from 'react-router';
import Shimmer from './components/shimmer';
import useNavbarTitleContext from '@/contexts/navbarTitle/useNavbarTitleContext';

const PaymentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const title = useNavbarTitleContext('Payment Details');

  const { data, isLoading, error } = usePaymentDetails({ id: id as string });

  if (isLoading) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Failed to load payment details
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center text-gray-500">No payment details found</div>
    );
  }

  return (
    <div className="w-full mx-auto mt-5 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-xl font-bold text-gray-700 mb-4">{title}</h1>
      <div className="text-sm text-gray-600 space-y-2">
        <div>
          <span className="font-semibold text-gray-800">ID: </span>
          {data?.id}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Type: </span>
          {data?.type}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Value: </span>
          {data?.value?.toLocaleString()}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Paid At: </span>
          {formatDate(data?.paid_at)}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Status: </span>
          {getStatusColor(data?.status)}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Description: </span>
          {data?.description}
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
