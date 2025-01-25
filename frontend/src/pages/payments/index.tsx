import { NavbarTitleContext } from '@/contexts/navbarTitle';
import { useContext, useEffect } from 'react';

const PaymentsPage = () => {
  const context = useContext(NavbarTitleContext);

  useEffect(() => {
    context?.setTitle('Payments');
  }, [context]);

  return (
    <div>
      <h1>Payments Page</h1>
    </div>
  );
};
export default PaymentsPage;
