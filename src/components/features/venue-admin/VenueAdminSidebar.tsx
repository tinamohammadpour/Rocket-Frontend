'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CircleX, Menu, X } from 'lucide-react';
import { venueAdminNavItems } from '@/constants/navigation/venueAdminNavbar';

interface VenueAdminSidebarProps {
  managerName?: string;
  venueName?: string;
}

export function VenueAdminSidebar({
  managerName = 'رضا محمدی',
  venueName = 'آریانا',
}: VenueAdminSidebarProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);

  const sidebarContent = (
    <>
      {/* Brand */}
      <div className="flex h-10 w-full items-center justify-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-white">
          <CircleX className="size-6 text-[#10B981]" strokeWidth={2} aria-hidden="true" />
        </div>

        <h2 className="whitespace-nowrap text-xl font-bold leading-normal text-white">
          پنل مدیریت راکت
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex w-full flex-col gap-2" aria-label="منوی مدیریت مجموعه">
        {venueAdminNavItems.map((item) => {
          const Icon = item.icon;

          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex h-[49px] w-full items-center justify-start gap-3 rounded-[8px] px-4 py-3 text-base font-medium  leading-normal text-[#DCE3DF] transition-colors duration-200 ${
                isActive ? 'bg-[#10B981]' : 'bg-transparent hover:bg-[#374151]'
              }`}
            >
              <Icon className="size-5 shrink-0" strokeWidth={2} aria-hidden="true" />

              <span className="whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="w-full border-t border-[#374151] pt-10">
        <div className="flex w-full items-center justify-start gap-3">
          <div className="size-10 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />

          <div className="flex flex-col items-start gap-0.5 text-right leading-normal">
            <p className="whitespace-nowrap text-sm font-bold text-white">{managerName}</p>

            <p className="whitespace-nowrap text-xs font-normal text-[#DCE3DF]">
              مدیر مجموعه {venueName}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        dir="rtl"
        onClick={() => setIsDesktopOpen(false)}
        className={`sticky top-0 hidden h-screen shrink-0 cursor-pointer overflow-hidden bg-[#1F2937] transition-[width,padding] duration-300 ease-in-out md:flex ${
          isDesktopOpen ? 'w-[260px] px-4 py-8' : 'w-0 px-0 py-8'
        }`}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={`flex min-w-[228px] cursor-default flex-col gap-10 transition-all duration-300 ease-in-out ${
            isDesktopOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          {sidebarContent}
        </div>
      </aside>

      {/* Desktop Reopen Button */}
      <button
        type="button"
        onClick={() => setIsDesktopOpen(true)}
        className={`fixed right-4 top-4 z-40 hidden size-11 items-center justify-center rounded-[10px] bg-[#1F2937] text-[#DCE3DF] shadow-md transition-all duration-300 hover:bg-[#10B981] hover:text-white md:flex ${
          isDesktopOpen
            ? 'pointer-events-none translate-x-4 scale-90 opacity-0'
            : 'translate-x-0 scale-100 opacity-100'
        }`}
        aria-label="باز کردن سایدبار"
        title="باز کردن سایدبار"
      >
        <Menu className="size-6" />
      </button>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed right-4 top-4 z-40 flex size-11 items-center justify-center rounded-lg bg-[#1F2937] text-white shadow-md md:hidden"
        aria-label="باز کردن منوی مدیریت"
        aria-expanded={isOpen}
      >
        <Menu className="size-6" />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        dir="rtl"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[260px] max-w-[85vw] flex-col gap-10 bg-[#1F2937] px-4 py-8 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute left-3 top-3 flex size-8 items-center justify-center rounded-md text-[#DCE3DF] transition-colors hover:bg-[#374151] hover:text-white"
          aria-label="بستن منوی مدیریت"
        >
          <X className="size-5" />
        </button>

        {sidebarContent}
      </aside>
    </>
  );
}
