import { cn } from '@/lib/utils';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={cn(
        'relative h-9 w-full min-w-37.5 sm:min-w-45 md:min-w-50 lg:min-w-55 border-none bg-[#2563EB] text-[#F5F7F2] px-3 sm:px-4 font-bold uppercase tracking-[1px] transition-all duration-200 rounded-[10px] opacity-80 hover:opacity-100 active:top-1 shadow-[0px_7px_2px_rgba(37,99,235,0.5),0px_8px_5px_rgba(0,0,0,0.3)] hover:shadow-[0px_7px_2px_rgba(37,99,235,0.7),0px_8px_5px_rgba(0,0,0,0.3)] active:shadow-[0px_3px_2px_rgba(37,99,235,0.5),0px_3px_5px_rgba(0,0,0,0.3)] text-xs sm:text-sm md:text-base cursor-pointer',
        className
      )}
    >
      {children}
    </button>
  );
}
