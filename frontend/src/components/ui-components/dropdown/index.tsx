import { Input } from '@/components/ui-components';
import { cn } from '@/utils';
import React, { useEffect, useRef, useState } from 'react';
import { CiCircleChevDown } from 'react-icons/ci';
import { IDropdownProps, Option } from './dropdown.types';

const DropDown: React.FC<IDropdownProps> = ({
  options,
  placeholder,
  className,
  value,
  onChange,
  isMultiSelect = true,
  isShowSearch = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDirection, setOpenDirection] = useState<'top' | 'bottom'>(
    'bottom'
  );

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionChange = (option: Option) => {
    if (isMultiSelect) {
      const newValue =
        Array.isArray(value) && value.some((val) => val === option.value)
          ? value.filter((val) => val !== option.value)
          : [...(value as string[]), option.value];
      onChange?.(newValue);
    } else {
      onChange?.(option);
      setIsOpen(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && toggleButtonRef.current && dropdownRef.current) {
      const buttonRect = toggleButtonRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;

      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      setOpenDirection(
        spaceBelow < dropdownHeight && spaceAbove > dropdownHeight
          ? 'top'
          : 'bottom'
      );
    }
  }, [isOpen]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm)
  );

  const selectedLabel = !isMultiSelect
    ? (value as Option)?.label
    : Array.isArray(value) && value.length > 0
    ? `${value.length} selected`
    : placeholder;

  return (
    <div className={cn('relative', className)}>
      <div
        ref={toggleButtonRef}
        className="w-full p-3 text-sm text-gray-800 border border-gray-300 rounded-lg bg-white cursor-pointer flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <span>{selectedLabel || placeholder}</span>
        <span className="text-2xl">
          <CiCircleChevDown />
        </span>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={cn(
            'absolute z-10 w-full max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg',
            openDirection === 'top' ? 'bottom-full mb-2' : 'top-full mt-1'
          )}
        >
          {isShowSearch && (
            <div className="p-2 sticky top-0 bg-white">
              <Input
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search..."
                className="w-full p-2 text-sm text-gray-800 border border-gray-300 rounded-lg"
              />
            </div>
          )}
          <div className="py-2 overflow-auto">
            {filteredOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type={isMultiSelect ? 'checkbox' : 'radio'}
                  name={isMultiSelect ? undefined : 'single-select'}
                  value={option.value}
                  checked={
                    isMultiSelect
                      ? Array.isArray(value) && value.includes(option.value)
                      : (value as Option)?.value === option.value
                  }
                  onChange={() => handleOptionChange(option)}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
            {filteredOptions.length === 0 && (
              <div className="px-4 py-2 text-sm text-gray-500">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
