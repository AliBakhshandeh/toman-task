import React, { createContext, useState, ReactNode } from 'react';

interface NavbarTitleContextType {
  title: string;
  setTitle: (title: string) => void;
}

export const NavbarTitleContext = createContext<
  NavbarTitleContextType | undefined
>(undefined);

interface NavbarTitleProviderProps {
  children: ReactNode;
}

export const NavbarTitleProvider: React.FC<NavbarTitleProviderProps> = ({
  children,
}) => {
  const [title, setTitle] = useState<string>('Unknown Page');

  return (
    <NavbarTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </NavbarTitleContext.Provider>
  );
};
