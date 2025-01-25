import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from '@/utils';
import Input from '@/components/ui-components/input';

interface SearchInputProps {
  onSearch: (query: string) => void;
  debounceDelay?: number;
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  value?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  debounceDelay = 500,
  icon,
  placeholder,
  className,
  inputClassName,
  iconClassName,
  value,
}) => {
  const [searchValue, setSearchValue] = useState(value || '');

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, debounceDelay),
    [onSearch, debounceDelay]
  );

  useEffect(() => {
    debouncedSearch(searchValue);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchValue, debouncedSearch]);
  useEffect(() => {
    setSearchValue(value as string);
  }, [value]);
  return (
    <Input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      icon={icon}
      placeholder={placeholder}
      className={className}
      inputClassName={inputClassName}
      iconClassName={iconClassName}
    />
  );
};

export default SearchInput;
