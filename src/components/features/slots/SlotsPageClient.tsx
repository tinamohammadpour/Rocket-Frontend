'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

import type { CourtSlot } from '@/types/slotType';
import { SlotCard } from './SlotCard';

type SlotsPageClientProps = {
  venueId: string;
  venueName: string;
  venueCity: string;
  courtName: string;
  slots: CourtSlot[];
};

const dateFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  month: 'long',
  day: 'numeric',
});

const weekDayFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  weekday: 'long',
});

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function createNextDays(count: number) {
  const today = new Date();

  today.setHours(12, 0, 0, 0);

  return Array.from({ length: count }, (_, index) => {
    const date = new Date(today);

    date.setDate(today.getDate() + index);

    return {
      key: toDateKey(date),
      date,
      offset: index,
    };
  });
}

export function SlotsPageClient({
  venueId,
  venueName,
  venueCity,
  courtName,
  slots,
}: SlotsPageClientProps) {
  const router = useRouter();

  const dates = useMemo(() => createNextDays(7), []);

  const [selectedDate, setSelectedDate] = useState(dates[0]?.key ?? '');

  const [selectedSlot, setSelectedSlot] = useState<CourtSlot | null>(null);

  const filteredSlots = useMemo(() => {
    return slots
      .filter((slot) => slot.date === selectedDate)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  }, [slots, selectedDate]);

  return (
    <div dir="rtl" className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <button
        type="button"
        onClick={() => router.push(`/venues/${venueId}/courts`)}
        className="mb-5 flex items-center gap-1 text-sm font-medium text-[#6B7280] transition-colors hover:text-[#2563EB]"
      >
        <ArrowRight className="h-4 w-4" />
        بازگشت به زمین‌ها
      </button>

      <div className="mb-8">
        <h1 className="text-xl font-bold text-[#1F2937] md:text-2xl">سانس‌های {courtName}</h1>

        <div className="mt-2 flex items-center gap-1 text-sm text-[#6B7280]">
          <MapPin className="h-4 w-4" />

          <span>
            {venueName}، {venueCity}
          </span>
        </div>
      </div>

      <div className="mb-8">
        <p className="mb-3 text-sm font-medium text-[#1F2937]">انتخاب تاریخ</p>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {dates.map(({ key, date, offset }) => {
            const isSelected = selectedDate === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setSelectedDate(key);
                  setSelectedSlot(null);
                }}
                className={`min-w-28 rounded-2xl border px-4 py-3 text-center transition-all ${
                  isSelected
                    ? 'border-[#2563EB] bg-[#2563EB] text-white'
                    : 'border-gray-200 bg-white text-[#1F2937] hover:border-[#2563EB]/40'
                }`}
              >
                <span className="block text-sm font-bold">
                  {offset === 0 ? 'امروز' : offset === 1 ? 'فردا' : weekDayFormatter.format(date)}
                </span>

                <span
                  className={`mt-1 block text-xs ${
                    isSelected ? 'text-white/80' : 'text-[#6B7280]'
                  }`}
                >
                  {dateFormatter.format(date)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {filteredSlots.length > 0 ? (
        <>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-[#1F2937]">سانس‌های این روز</p>

            <span className="text-xs text-[#6B7280]">
              {filteredSlots.length.toLocaleString('fa-IR')} سانس
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSlots.map((slot) => (
              <SlotCard
                key={slot.id}
                slot={slot}
                isSelected={selectedSlot?.id === slot.id}
                onSelect={setSelectedSlot}
              />
            ))}

            {selectedSlot && (
              <div className="mt-8 rounded-2xl border border-[#2563EB]/20 bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-base font-bold text-[#1F2937]">خلاصه انتخاب شما</h2>

                <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <span className="block text-xs text-[#6B7280]">مجموعه</span>

                    <span className="mt-1 block font-medium text-[#1F2937]">{venueName}</span>
                  </div>

                  <div>
                    <span className="block text-xs text-[#6B7280]">زمین</span>

                    <span className="mt-1 block font-medium text-[#1F2937]">{courtName}</span>
                  </div>

                  <div>
                    <span className="block text-xs text-[#6B7280]">ساعت</span>

                    <span dir="ltr" className="mt-1 block font-medium text-[#1F2937]">
                      {selectedSlot.startTime} - {selectedSlot.endTime}
                    </span>
                  </div>

                  <div>
                    <span className="block text-xs text-[#6B7280]">مبلغ</span>

                    <span className="mt-1 block font-bold text-[#2563EB]">
                      {selectedSlot.price.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedSlot(null)}
                    className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-[#6B7280] transition-colors hover:bg-gray-50"
                  >
                    لغو انتخاب
                  </button>

                  <button
                    type="button"
                    onClick={() => router.push(`/reservations/confirm/${selectedSlot.id}`)}
                    className="rounded-xl bg-[#2563EB] px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  >
                    ادامه فرایند رزرو
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="rounded-2xl border border-gray-100 bg-white px-4 py-20 text-center">
          <p className="font-medium text-[#1F2937]">سانسی در این تاریخ وجود ندارد</p>

          <p className="mt-2 text-sm text-[#6B7280]">
            تاریخ دیگری را برای مشاهده سانس‌های قابل رزرو انتخاب کنید.
          </p>
        </div>
      )}
    </div>
  );
}
