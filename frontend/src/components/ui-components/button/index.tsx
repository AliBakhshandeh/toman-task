import { cn } from '@/utils';
import React from 'react';
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center text-white py-2 px-4 rounded',
        className
      )}
    >
      {icon && <span className={children ? 'mr-2' : ''}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
