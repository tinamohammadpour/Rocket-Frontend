'use client';

import { ArrowRight, CalendarDays, Clock3, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

import type { Court } from '@/types/courtType';
import type { CourtSlot } from '@/types/slotType';
import type { Venue } from '@/types/venueType';
import PrimaryButton from '@/components/shared/PrimaryButton';

type ReservationConfirmPageClientProps = {
  slot: CourtSlot;
  court: Court;
  venue: Venue;
};

const dateFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

function parseDate(date: string) {
  return new Date(`${date}T12:00:00`);
}

export function ReservationConfirmPageClient({
  slot,
  court,
  venue,
}: ReservationConfirmPageClientProps) {
  const router = useRouter();

  return (
    <div dir="rtl" className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
      <button
        type="button"
        onClick={() => router.push(`/venues/${venue.id}/courts/${court.id}/slots`)}
        className="mb-6 flex items-center gap-1 text-sm font-medium text-[#6B7280] transition-colors hover:text-[#2563EB]"
      >
        <ArrowRight className="h-4 w-4" />
        بازگشت به انتخاب سانس
      </button>

      <div className="mb-8">
        <h1 className="text-xl font-bold text-[#1F2937] md:text-2xl">تأیید رزرو</h1>

        <p className="mt-2 text-sm text-[#6B7280]">
          اطلاعات رزرو را بررسی کرده و در صورت تأیید ادامه دهید.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="font-bold text-[#1F2937]">{venue.name}</h2>

          <div className="mt-2 flex items-center gap-1 text-sm text-[#6B7280]">
            <MapPin className="h-4 w-4" />
            <span>{venue.city}</span>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2">
          <div>
            <span className="text-xs text-[#6B7280]">زمین</span>

            <p className="mt-1 font-medium text-[#1F2937]">{court.name}</p>
          </div>

          <div>
            <span className="text-xs text-[#6B7280]">نوع زمین</span>

            <p className="mt-1 font-medium text-[#1F2937]">
              {court.courtType === 'indoor' ? 'سرپوشیده' : 'روباز'}
            </p>
          </div>

          <div>
            <span className="flex items-center gap-1 text-xs text-[#6B7280]">
              <CalendarDays className="h-4 w-4" />
              تاریخ
            </span>

            <p className="mt-1 font-medium text-[#1F2937]">
              {dateFormatter.format(parseDate(slot.date))}
            </p>
          </div>

          <div>
            <span className="flex items-center gap-1 text-xs text-[#6B7280]">
              <Clock3 className="h-4 w-4" />
              ساعت
            </span>

            <p dir="ltr" className="mt-1 text-right font-medium text-[#1F2937]">
              {slot.startTime} - {slot.endTime}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-[#F9FAFB] p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B7280]">مبلغ قابل پرداخت</span>

            <span className="text-lg font-bold text-[#2563EB]">
              {slot.price.toLocaleString('fa-IR')} تومان
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <PrimaryButton>تأیید و ادامه به پرداخت</PrimaryButton>
      </div>
    </div>
  );
}
