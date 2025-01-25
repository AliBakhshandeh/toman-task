import Pagination from '@/components/ui-components/pagination';
import Table from '@/components/ui-components/table';
import { TableProps } from '@/components/ui-components/table/table.types';
import Shimmer from '@/pages/payments/components/shimmer';

import { PaymentsResponse } from '@/types/payments.types';
import React from 'react';

interface TableSectionProps {
  isLoading: boolean;
  isError: boolean;
  data?: PaymentsResponse;
  headers: string[];
  filters: {
    page: number;
  };
  tableData: TableProps['data'];
  handlePageChange: (page: number) => void;
}

const TableSection: React.FC<TableSectionProps> = ({
  isLoading,
  isError,
  data,
  headers,
  filters,
  tableData,
  handlePageChange,
}) => {
  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="flex flex-col gap-y-2">
          {isError ? (
            <div className="text-red-500">
              Something went wrong! Refresh the page to try again.
            </div>
          ) : data && data.entities.length > 0 ? (
            <>
              <Table headers={headers} data={tableData} />
              <div className="w-full flex justify-end">
                <Pagination
                  currentPage={filters.page}
                  totalOrders={data.total}
                  itemsPerPage={data.limit}
                  action={handlePageChange}
                />
              </div>
            </>
          ) : (
            <div className="text-gray-500">No payments found</div>
          )}
        </div>
      )}
    </>
  );
};

export default TableSection;
