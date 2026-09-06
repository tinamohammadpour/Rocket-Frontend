'use client';

import Image from 'next/image';
import { Clock3 } from 'lucide-react';
import type { Court } from '@/types/courtType';
import PrimaryButton from '@/components/shared/PrimaryButton';
import { useRouter } from 'next/navigation';

type CourtCardProps = {
  court: Court;
};

export function CourtCard({ court }: CourtCardProps) {
  const router = useRouter();
  return (
    <div className="group overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-lg">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={court.image}
          alt={court.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full bg-[#84CC16] px-2.5 py-1 text-xs font-medium text-[#1F2937]">
          {court.courtType === 'indoor' ? 'سرپوشیده' : 'روباز'}
        </span>
      </div>

      <div dir="rtl" className="p-4">
        <h3 className="mb-3 text-base font-bold text-[#1F2937]">{court.name}</h3>

        <div className="mb-4 flex items-center gap-2 text-sm">
          <Clock3 className="h-4 w-4 text-[#6B7280]" />

          {court.availableToday ? (
            <span className="font-medium text-[#10B981]">
              {court.availableSlotsCount.toLocaleString('fa-IR')} سانس آزاد امروز
            </span>
          ) : (
            <span className="text-[#6B7280]">امروز سانس آزاد ندارد</span>
          )}
        </div>

        <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs text-[#6B7280]">قیمت هر ساعت</span>

          <span className="text-sm font-bold text-[#2563EB]">
            {court.pricePerHour.toLocaleString('fa-IR')} تومان
          </span>
        </div>

        <PrimaryButton
          onClick={() => router.push(`/venues/${court.venueId}/courts/${court.id}/slots`)}
        >
          مشاهده سانس‌ها
        </PrimaryButton>
      </div>
    </div>
  );
}
