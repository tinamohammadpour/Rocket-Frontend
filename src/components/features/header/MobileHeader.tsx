'use client';

import Link from 'next/link';
import { Bell, Radar } from 'lucide-react';

export function MobileHeader() {
  return (
    <header
      dir="rtl"
      className="md:hidden fixed top-0 inset-x-0 z-40 h-14 bg-[#F5F7F2] border-b border-gray-100"
    >
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-base text-[#1F2937]">راکت</span>
          <span className="w-7 h-7 rounded-lg bg-[#1F2937] flex items-center justify-center">
            <Radar className="h-4 w-4 text-[#84CC16]" />
          </span>
        </div>
        <Link href="/notifications" className="relative text-[#1F2937]">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -left-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </Link>
      </div>
    </header>
  );
}
