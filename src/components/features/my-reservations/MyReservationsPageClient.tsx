'use client';

import { useMemo, useState } from 'react';
import { CalendarCheck2 } from 'lucide-react';

import { ReservationCard } from './ReservationCard';
import { MOCK_RESERVATIONS, RESERVATION_FILTERS } from '@/constants/reservations';
import { cn } from '@/lib/utils';
import type { ReservationFilter } from '@/types/reservationType';

export function MyReservationsPageClient() {
  const [activeFilter, setActiveFilter] = useState<ReservationFilter>('all');

  const filteredReservations = useMemo(() => {
    if (activeFilter === 'all') {
      return MOCK_RESERVATIONS;
    }

    if (activeFilter === 'past') {
      return MOCK_RESERVATIONS.filter((reservation) => reservation.status === 'past');
    }

    return MOCK_RESERVATIONS.filter((reservation) => reservation.status !== 'past');
  }, [activeFilter]);

  return (
    <section dir="rtl" className="min-h-full bg-[#F9FAFB] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <header className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <h1 className="text-2xl font-bold text-[#1F2937] md:text-3xl">رزروهای من</h1>

          <p className="mt-2 text-sm leading-6 text-[#6B7280] md:text-base">
            رزروهای فعال و سوابق بازی‌هایت را اینجا ببین.
          </p>
        </header>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1F2937] shadow-sm ring-1 ring-gray-100">
            <CalendarCheck2 className="size-4 text-[#2563EB]" aria-hidden="true" />
            {MOCK_RESERVATIONS.length.toLocaleString('fa-IR')} رزرو ثبت‌شده
          </span>

          <div
            className="flex w-fit items-center gap-2 rounded-xl bg-white p-1 shadow-sm ring-1 ring-gray-100"
            role="group"
            aria-label="فیلتر رزروها"
          >
            {RESERVATION_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.value)}
                  className={cn(
                    'h-9 rounded-lg border px-4 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/30',
                    isActive
                      ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB]'
                      : 'border-transparent text-[#6B7280] hover:bg-[#F5F7F2] hover:text-[#1F2937]'
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {filteredReservations.length > 0 ? (
          <div className="mt-6 space-y-4">
            {filteredReservations.map((reservation) => (
              <ReservationCard key={reservation.id} reservation={reservation} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-gray-200 bg-white px-6 py-16 text-center">
            <CalendarCheck2 className="mx-auto size-10 text-[#9CA3AF]" aria-hidden="true" />

            <p className="mt-4 text-sm font-medium text-[#6B7280]">رزروی در این بخش وجود ندارد.</p>
          </div>
        )}
      </div>
    </section>
  );
}
