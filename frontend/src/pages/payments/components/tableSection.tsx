import { DropDown } from '@/components/ui-components';
import Pagination from '@/components/ui-components/pagination';
import Table from '@/components/ui-components/table';
import { TableProps } from '@/components/ui-components/table/table.types';
import Shimmer from '@/pages/payments/components/shimmer';

import { PaymentsResponse } from '@/types/payments.types';
import React, { useMemo } from 'react';
interface Options {
  value: string;
  label: string;
}
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
  pageSize: Options;
  setPageSize: (pageSize: Options) => void;
}

const TableSection: React.FC<TableSectionProps> = ({
  isLoading,
  isError,
  data,
  headers,
  filters,
  tableData,
  handlePageChange,
  pageSize,
  setPageSize,
}) => {
  const options = useMemo(
    () => [
      { value: '10', label: '10' },
      { value: '20', label: '20' },
      { value: '50', label: '50' },
    ],
    []
  );
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
              <div className="w-full flex flex-wrap items-center justify-start gap-2">
                <Pagination
                  currentPage={filters.page}
                  totalOrders={data.total}
                  itemsPerPage={data.limit}
                  action={handlePageChange}
                />
                <DropDown
                  options={options}
                  value={pageSize}
                  onChange={(value) => setPageSize(value as Options)}
                  placeholder=""
                  isMultiSelect={false}
                  isShowSearch={false}
                  className="w-full sm:w-auto"
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
