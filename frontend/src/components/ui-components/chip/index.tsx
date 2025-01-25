import * as React from 'react';
import { cn } from '@/utils';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'secondary' | 'destructive' | 'outline';
}

function Chip({ className, variant = 'default', ...props }: ChipProps) {
  const baseClasses =
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    default: 'bg-blue-200 text-blue-600 border-none',
    success: 'bg-green-200 text-green-600 border-none',
    secondary: 'bg-gray-200 text-gray-600 border-none',
    destructive: 'bg-red-200 text-red-600 border-none',
    outline: 'border-gray-300 text-gray-800',
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], className);

  return <div className={combinedClasses} {...props} />;
}

export default Chip;
