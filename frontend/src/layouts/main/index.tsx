import Navbar from '@/components/navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full mx-auto my-2 px-2">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
