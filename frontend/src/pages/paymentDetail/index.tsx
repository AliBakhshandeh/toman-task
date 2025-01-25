import { usePaymentDetails } from '@/apis/payment/payment.rq';
import { getStatusColor } from '@/pages/payments/utils';
import { formatDate } from '@/utils';
import { useParams } from 'react-router';
import Shimmer from './components/shimmer';

const PaymentDetails = () => {
  const { id } = useParams<{ id: string }>();

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

  const { id: paymentId, type, value, paid_at, status, description } = data;

  return (
    <div className="w-full mx-auto mt-5 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-xl font-bold text-gray-700 mb-4">Payment Details</h1>
      <div className="text-sm text-gray-600 space-y-2">
        <div>
          <span className="font-semibold text-gray-800">ID: </span>
          {paymentId}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Type: </span>
          {type}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Value: </span>
          {value.toLocaleString()}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Paid At: </span>
          {formatDate(paid_at)}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Status: </span>
          {getStatusColor(status)}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Description: </span>
          {description}
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
