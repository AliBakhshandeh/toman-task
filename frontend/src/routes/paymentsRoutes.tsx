import Loadable from '@/components/loadable';
import MainLayout from '@/layouts/main';
import { lazy } from 'react';

const PaymentsPage = Loadable(lazy(() => import('@/pages/payments')));
const PaymentDetailPage = Loadable(lazy(() => import('@/pages/paymentDetail')));
const NotFoundPage = Loadable(lazy(() => import('@/pages/errors/notFound')));
const UITestPage = Loadable(lazy(() => import('@/pages/ui-test')));

const PaymentsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <PaymentsPage />,
    },
    {
      path: '/payment-detail/:id',
      element: <PaymentDetailPage />,
    },
    {
      path: '/ui-test',
      element: <UITestPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
};

export default PaymentsRoutes;
