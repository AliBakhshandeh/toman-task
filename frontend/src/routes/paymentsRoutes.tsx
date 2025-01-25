import MainLayout from '@/layouts/main';
import PaymentsPage from '@/pages/payments';

const PaymentsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <PaymentsPage />,
    },
  ],
};

export default PaymentsRoutes;
