import { cn } from '@/utils';
import React from 'react';
import { InputProps } from './input.types';

const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  inputClassName,
  iconClassName,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-center border-2 border-gray-300 rounded-lg p-0.5',
        className
      )}
    >
      {icon && (
        <span className={cn('mx-2 text-gray-500', iconClassName)}>{icon}</span>
      )}
      <input
        type="text"
        className={cn('outline-none flex-1 p-2', inputClassName)}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
