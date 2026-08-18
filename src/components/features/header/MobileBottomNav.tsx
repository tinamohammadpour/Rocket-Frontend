'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { mobileNavItems } from '@/constants/navbarItems';

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      dir="rtl"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-100 h-16"
    >
      <div className="h-full grid grid-cols-4">
        {mobileNavItems.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center justify-center gap-1"
            >
              <Icon className={cn('h-5 w-5', isActive ? 'text-[#2563EB]' : 'text-[#9CA3AF]')} />
              <span
                className={cn(
                  'text-[11px] font-medium',
                  isActive ? 'text-[#2563EB]' : 'text-[#9CA3AF]'
                )}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
