import router from '@/routes';
import { RouterProvider } from 'react-router';
import './App.css';
import { NavbarTitleProvider } from '@/contexts/navbarTitle';

function App() {
  return (
    <div className="App">
      <NavbarTitleProvider>
        <RouterProvider router={router} />
      </NavbarTitleProvider>
    </div>
  );
}

export default App;
