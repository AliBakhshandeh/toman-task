import router from '@/routes';
import { RouterProvider } from 'react-router';
import './App.css';
import { NavbarTitleProvider } from '@/contexts/navbarTitle';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavbarTitleProvider>
        <RouterProvider router={router} />
        <Toaster richColors />
      </NavbarTitleProvider>
    </QueryClientProvider>
  );
}

export default App;
