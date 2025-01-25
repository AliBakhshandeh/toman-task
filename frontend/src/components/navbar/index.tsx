import { useLocation, useNavigate } from 'react-router';
import { CiSquareChevRight } from 'react-icons/ci';
import dictRoutesList from '@/routes/dictRoutesList';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentRouteKey = location.pathname.split('/').pop() || 'payments';
  const currentRouteName =
    Object.keys(dictRoutesList).find((each) => each === currentRouteKey) ||
    'Payments';

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          {currentRouteName}
        </span>
        {location.pathname !== '/' && (
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="inline-flex items-center text-4xl justify-center text-gray-500 rounded-lg focus:outline-none"
            aria-label="Go Back"
          >
            <CiSquareChevRight />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
