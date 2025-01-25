import React from 'react';
import SearchInput from '@/components/searchInput';
import MultiSelect from '@/components/ui-components/dropdown';
import Button from '@/components/ui-components/button';

import { CiCircleRemove, CiSearch } from 'react-icons/ci';

import { PaymentStatus, PaymentType } from '@/types/payments.types';
import {
  PaymentStatusesOptions,
  PaymentTypesOptions,
} from '@/constants/payments';

type SearchSectionProps = {
  filters: {
    search: string;
    status: PaymentStatus[];
    type: PaymentType[];
  };
  hasFiltersOrSearch: boolean;
  onSearch: (query: string) => void;
  onFilterChange: (
    key: 'type' | 'status',
    value: PaymentType[] | PaymentStatus[]
  ) => void;
  onResetFilters: () => void;
};

const SearchSection: React.FC<SearchSectionProps> = ({
  filters,
  hasFiltersOrSearch,
  onSearch,
  onFilterChange,
  onResetFilters,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap">
      <SearchInput
        onSearch={onSearch}
        icon={<CiSearch />}
        inputClassName="w-full sm:w-1/4 lg:w-1/5"
        iconClassName="text-xl"
        placeholder="Search..."
        debounceDelay={500}
        value={filters.search}
      />
      <MultiSelect
        className="w-full sm:w-1/4 lg:w-1/5"
        options={PaymentStatusesOptions}
        placeholder="Select Status"
        value={filters.status}
        onChange={(value) => onFilterChange('status', value as PaymentStatus[])}
      />
      <MultiSelect
        className="w-full sm:w-1/4 lg:w-1/5"
        options={PaymentTypesOptions}
        placeholder="Select Type"
        value={filters.type}
        onChange={(value) => onFilterChange('type', value as PaymentType[])}
      />
      {hasFiltersOrSearch && (
        <Button
          icon={<CiCircleRemove />}
          className="w-full sm:w-1/4 lg:w-fit text-center text-black text-2xl"
          onClick={onResetFilters}
        />
      )}
    </div>
  );
};

export default SearchSection;
