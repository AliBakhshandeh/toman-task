import { NavbarTitleContext } from '@/contexts/navbarTitle';
import { memo, useContext } from 'react';
import { CiSquareChevRight } from 'react-icons/ci';
import { useLocation, useNavigate } from 'react-router';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(NavbarTitleContext);

  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <span className="text-2xl font-semibold text-gray-800">
          {context?.title}
        </span>
        {location.pathname !== '/' && (
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="inline-flex items-center text-2xl text-gray-600 hover:text-gray-800 focus:outline-none cursor-pointer"
            aria-label="Go Back"
          >
            <CiSquareChevRight className="mr-2" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default memo(Navbar);
