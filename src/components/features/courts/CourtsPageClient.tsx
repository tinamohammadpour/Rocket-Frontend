'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { Court } from '@/types/courtType';
import { CourtCard } from './CourtCard';

type CourtsPageClientProps = {
  courts: Court[];
  venueName: string;
  venueCity: string;
};

type AvailabilityFilter = 'all' | 'available';
type CourtTypeFilter = 'all' | 'indoor' | 'outdoor';

export function CourtsPageClient({ courts, venueName, venueCity }: CourtsPageClientProps) {
  const router = useRouter();
  const [availabilityFilter, setAvailabilityFilter] = useState<AvailabilityFilter>('all');
  const [courtTypeFilter, setCourtTypeFilter] = useState<CourtTypeFilter>('all');
  const filteredCourts = useMemo(() => {
    return courts.filter((court) => {
      const matchesAvailability = availabilityFilter === 'all' || court.availableToday;

      const matchesCourtType = courtTypeFilter === 'all' || court.courtType === courtTypeFilter;

      return matchesAvailability && matchesCourtType;
    });
  }, [courts, availabilityFilter, courtTypeFilter]);

  return (
    <div dir="rtl" className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <div className="mb-8">
        <button
          type="button"
          onClick={() => router.push('/venues')}
          className="mb-5 flex items-center gap-1 text-sm font-medium text-[#6B7280] transition-colors hover:text-[#2563EB]"
        >
          <ArrowRight className="h-4 w-4" />
          بازگشت به مجموعه‌ها
        </button>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-[#1F2937] md:text-2xl">زمین‌های {venueName}</h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-[#6B7280]">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{venueCity}</span>
            </div>

            <span className="h-1 w-1 rounded-full bg-[#9CA3AF]" />

            <span>{courts.length.toLocaleString('fa-IR')} زمین</span>
          </div>

          <p className="mt-1 text-sm text-[#6B7280]">
            زمین موردنظر خود را برای مشاهده سانس‌های قابل رزرو انتخاب کنید.
          </p>
        </div>
      </div>
      {/* Availability Filter */}
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <div>
          <p className="mb-2 text-sm font-medium text-[#1F2937]">وضعیت سانس</p>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setAvailabilityFilter('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                availabilityFilter === 'all'
                  ? 'bg-[#2563EB] text-white'
                  : 'border border-gray-200 bg-white text-[#6B7280] hover:bg-gray-50'
              }`}
            >
              همه زمین‌ها
            </button>

            <button
              type="button"
              onClick={() => setAvailabilityFilter('available')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                availabilityFilter === 'available'
                  ? 'bg-[#2563EB] text-white'
                  : 'border border-gray-200 bg-white text-[#6B7280] hover:bg-gray-50'
              }`}
            >
              دارای سانس آزاد امروز
            </button>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-[#1F2937]">نوع زمین</p>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCourtTypeFilter('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                courtTypeFilter === 'all'
                  ? 'bg-[#84CC16] text-[#1F2937]'
                  : 'border border-gray-200 bg-white text-[#6B7280] hover:bg-gray-50'
              }`}
            >
              همه
            </button>

            <button
              type="button"
              onClick={() => setCourtTypeFilter('indoor')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                courtTypeFilter === 'indoor'
                  ? 'bg-[#84CC16] text-[#1F2937]'
                  : 'border border-gray-200 bg-white text-[#6B7280] hover:bg-gray-50'
              }`}
            >
              سرپوشیده
            </button>

            <button
              type="button"
              onClick={() => setCourtTypeFilter('outdoor')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                courtTypeFilter === 'outdoor'
                  ? 'bg-[#84CC16] text-[#1F2937]'
                  : 'border border-gray-200 bg-white text-[#6B7280] hover:bg-gray-50'
              }`}
            >
              روباز
            </button>
          </div>
        </div>
      </div>

      {filteredCourts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-sm text-[#6B7280]">هیچ زمینی با فیلترهای انتخاب‌شده پیدا نشد.</p>

          {availabilityFilter === 'available' && (
            <button
              type="button"
              onClick={() => {
                setAvailabilityFilter('all');
                setCourtTypeFilter('all');
              }}
              className="mt-4 text-sm font-medium text-[#2563EB]"
            >
              پاک کردن فیلترها
            </button>
          )}
        </div>
      )}
    </div>
  );
}
