import { Button, Chip } from '@/components/ui-components';
import { formatDate } from '@/utils';
import { CiRead } from 'react-icons/ci';

interface Payment {
  type: string;
  value: number;
  paid_at: string;
  status: string;
  description: string | null;
  id: string;
}

interface SerializePaymentsProps {
  data: Payment[];
  viewDetailsOnClick: (id: string) => void;
}
export const getStatusColor = (status: string) => {
  switch (status) {
    case 'success':
      return <Chip variant="success">Success</Chip>;
    case 'pending':
      return <Chip variant="default">Pending</Chip>;
    case 'failed':
      return <Chip variant="destructive">Failed</Chip>;
    default:
      return <Chip variant="outline">unknow</Chip>;
  }
};
export const serializePayments = ({
  data,
  viewDetailsOnClick,
}: SerializePaymentsProps) => {
  return data.map((item: Payment) => [
    item.type,
    item.value.toLocaleString(),
    formatDate(item.paid_at),
    getStatusColor(item.status),
    item.description || '',
    <Button
      key={item.id}
      className="p-1 text-blue-900 text-lg hover:text-white bg-blue-300 hover:bg-blue-500 transition-all rounded-full"
      onClick={() => viewDetailsOnClick(item.id)}
    >
      <CiRead />
    </Button>,
  ]);
};
