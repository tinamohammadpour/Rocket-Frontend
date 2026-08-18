'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, User, Radar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from '@/constants/navbarItems';
export function Header() {
  const pathname = usePathname();

  return (
    <header
      dir="rtl"
      className="fixed top-0 inset-x-0 z-40 h-[70px] md:h-[85px] bg-[#F5F7F2] border-b border-gray-100"
    >
      <div className="h-full max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-lg text-[#1F2937]">راکت</span>
          <span className="w-9 h-9 rounded-xl bg-[#1F2937] flex items-center justify-center">
            <Radar className="h-5 w-5 text-[#84CC16]" />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-22">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative py-2 group">
                <span
                  className={cn(
                    'text-sm font-semibold transition-colors',
                    isActive ? 'text-[#1F2937]' : 'text-[#6B7280] group-hover:text-[#1F2937]'
                  )}
                >
                  {item.label}
                </span>
                <span
                  className={cn(
                    'absolute -bottom-0.5 right-0 left-0 h-0.5 bg-[#2563EB] rounded-full origin-center transition-transform duration-300 ease-out',
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex items-center gap-1 text-[#1F2937] shrink-0 cursor-pointer"
        >
          <ChevronDown className="h-4 w-4" />
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
