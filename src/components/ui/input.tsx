import * as React from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';

import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface InputProps extends React.ComponentProps<'input'> {
  icon?: LucideIcon;
}

function Input({ className, icon: Icon, type, ...props }: InputProps) {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
          <Icon className="h-4 w-4" />
        </div>
      )}
      <InputPrimitive
        type={type}
        data-slot="input"
        className={cn(
          'h-9 w-full min-w-0 rtl rounded-md border border-input bg-[#F5F7F2] px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
          Icon && 'pl-8',
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
