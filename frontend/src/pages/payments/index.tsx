import { lazy, useCallback, useEffect, useMemo, useReducer } from 'react';

import { usePaymentsList } from '@/apis/payment/payment.rq';
import Loadable from '@/components/loadable';
import Spinner from '@/components/ui-components/spinner';

const SearchSection = Loadable(
  lazy(() => import('./components/searchSection'))
);
const TableSection = Loadable(lazy(() => import('./components/tableSection')));

import { Option } from '@/components/ui-components/dropdown/dropdown.types';
import useNavbarTitleContext from '@/contexts/navbarTitle/useNavbarTitleContext';
import { serializePayments } from '@/pages/payments/utils';
import { PaymentStatus, PaymentType } from '@/types/payments.types';
import { debounce } from '@/utils';
import { useLocation, useNavigate } from 'react-router';

type Filters = {
  page: number;
  search: string;
  pageSize: Option;
  type: PaymentType[];
  status: PaymentStatus[];
};

type Action =
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_TYPE'; payload: PaymentType[] }
  | { type: 'SET_STATUS'; payload: PaymentStatus[] }
  | { type: 'SET_PAGE_SIZE'; payload: Option }
  | { type: 'RESET' };

const initialState: Filters = {
  page: 1,
  search: '',
  pageSize: { value: '20', label: '20' },
  type: [],
  status: [],
};

const filtersReducer = (state: Filters, action: Action): Filters => {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload, page: 1 };
    case 'SET_TYPE':
      return { ...state, type: action.payload, page: 1 };
    case 'SET_STATUS':
      return { ...state, status: action.payload, page: 1 };
    case 'SET_PAGE_SIZE':
      return { ...state, pageSize: action.payload, page: 1 };

    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const PaymentsPage = () => {
  const title = useNavbarTitleContext('Payments');
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const initialFilters = useMemo(() => {
    const limit = urlParams.get('limit') as string;
    const pageSize =
      +limit < 10 ? '10' : +limit > 50 ? '50' : limit.toString() || '10';

    return {
      ...initialState,
      page: Number(urlParams.get('page')) || 1,
      search: urlParams.get('search') || '',
      pageSize: {
        value: pageSize,
        label: pageSize,
      },
      type:
        urlParams
          .get('type')
          ?.split(',')
          .map((v) => v as PaymentType) || [],
      status:
        urlParams
          .get('status')
          ?.split(',')
          .map((v) => v as PaymentStatus) || [],
    };
  }, [urlParams]);

  const [filters, dispatch] = useReducer(filtersReducer, initialFilters);

  const { data, isLoading, isFetching, isError } = usePaymentsList({
    ...filters,
    limit: filters.pageSize,
  });

  const headers = useMemo(
    () => ['Type', 'Value', 'Paid At', 'Status', 'Description', ''],
    []
  );
  const tableData = useMemo(() => {
    if (!data) return [];
    return serializePayments({
      data: data.entities || [],
      viewDetailsOnClick: (id: string) => navigate(`/payment-detail/${id}`),
    });
  }, [data, navigate]);

  const debouncedUpdateURL = useCallback(
    debounce(() => {
      const newParams = new URLSearchParams();
      newParams.set('page', String(filters.page));
      newParams.set('limit', String(filters.pageSize.value));
      if (filters.search) newParams.set('search', filters.search);
      if (filters.type.length) newParams.set('type', filters.type.join(','));
      if (filters.status.length)
        newParams.set('status', filters.status.join(','));
      navigate({ search: newParams.toString() }, { replace: true });
    }, 500),
    [filters, navigate]
  );
  const handlePageSizeChange = useCallback(
    (newPageSize: Option) =>
      dispatch({ type: 'SET_PAGE_SIZE', payload: newPageSize }),
    []
  );
  useEffect(() => {
    debouncedUpdateURL();
    return () => debouncedUpdateURL.cancel();
  }, [debouncedUpdateURL]);

  const handlePageChange = useCallback(
    (newPage: number) => dispatch({ type: 'SET_PAGE', payload: newPage }),
    []
  );

  const handleSearch = useCallback(
    (query: string) => dispatch({ type: 'SET_SEARCH', payload: query }),
    []
  );

  const handleFilterChange = useCallback(
    (key: 'type' | 'status', value: PaymentType[] | PaymentStatus[]) => {
      if (key === 'type') {
        dispatch({ type: 'SET_TYPE', payload: value as PaymentType[] });
      } else {
        dispatch({ type: 'SET_STATUS', payload: value as PaymentStatus[] });
      }
    },
    []
  );

  const handleResetFilters = useCallback(() => dispatch({ type: 'RESET' }), []);

  const hasFiltersOrSearch = useMemo(
    () =>
      filters.search.trim() !== '' ||
      filters.type.length > 0 ||
      filters.status.length > 0,
    [filters]
  );

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2 items-center">
        <span className="text-lg font-semibold text-gray-700">{title}</span>
        {isFetching && <Spinner size={20} />}
      </div>

      <SearchSection
        filters={filters}
        hasFiltersOrSearch={hasFiltersOrSearch}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
      />

      <TableSection
        isLoading={isLoading}
        isError={isError}
        data={data}
        headers={headers}
        filters={filters}
        tableData={tableData}
        handlePageChange={handlePageChange}
        pageSize={filters.pageSize}
        setPageSize={handlePageSizeChange}
      />
    </div>
  );
};

export default PaymentsPage;
