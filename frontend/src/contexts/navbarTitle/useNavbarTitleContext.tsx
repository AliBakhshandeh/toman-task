import { useContext, useEffect } from 'react';
import { NavbarTitleContext } from '@/contexts/navbarTitle';

const useNavbarTitleContext = (title: string): string => {
  const context = useContext(NavbarTitleContext);

  if (!context) {
    throw new Error(
      'useNavbarTitleContext must be used within a NavbarTitleProvider'
    );
  }

  useEffect(() => {
    context.setTitle(title);
  }, []);

  return context.title;
};

export default useNavbarTitleContext;
