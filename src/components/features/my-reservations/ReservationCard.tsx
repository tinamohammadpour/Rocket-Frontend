import Link from 'next/link';
import { CalendarDays, Clock3, Hash } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Reservation, ReservationStatus } from '@/types/reservationType';

interface ReservationCardProps {
  reservation: Reservation;
}

const PRICE_FORMATTER = new Intl.NumberFormat('fa-IR');

const STATUS_CONFIG: Record<
  ReservationStatus,
  {
    label: string;
    className: string;
  }
> = {
  confirmed: {
    label: 'قطعی',
    className: 'bg-[#84CC16] text-[#1F2937]',
  },
  pending: {
    label: 'در انتظار پرداخت',
    className: 'bg-amber-500 text-white',
  },
  past: {
    label: 'گذشته',
    className: 'bg-gray-100 text-[#6B7280]',
  },
};

export function ReservationCard({ reservation }: ReservationCardProps) {
  const status = STATUS_CONFIG[reservation.status];
  const isPast = reservation.status === 'past';

  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-7">
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div>
          <h2 className="text-lg font-bold text-[#1F2937]">{reservation.venueName}</h2>

          <p className="mt-1 text-sm text-[#6B7280]">{reservation.courtName}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#6B7280]">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4 text-[#9CA3AF]" aria-hidden="true" />
              {reservation.date}
            </span>

            <span className="inline-flex items-center gap-2">
              <Clock3 className="size-4 text-[#9CA3AF]" aria-hidden="true" />
              {reservation.time}
            </span>

            <span className="inline-flex items-center gap-2">
              <Hash className="size-4 text-[#9CA3AF]" aria-hidden="true" />

              <span>
                کد رزرو: <bdi dir="ltr">{reservation.code}</bdi>
              </span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 md:min-w-40 md:flex-col md:items-end">
          <span
            className={cn(
              'inline-flex rounded-full px-4 py-1.5 text-xs font-bold',
              status.className
            )}
          >
            {status.label}
          </span>

          <p className="text-sm text-[#6B7280] md:mt-6">
            <span className="text-lg font-bold text-[#1F2937]">
              {PRICE_FORMATTER.format(reservation.price)}
            </span>{' '}
            تومان
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant={isPast ? 'outline' : 'default'}
          className={cn(
            'h-10 min-w-40 px-5 font-bold',
            isPast
              ? 'border-[#9CA3AF] text-[#6B7280] hover:bg-gray-50'
              : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
          )}
          aria-label={`مشاهده جزئیات رزرو ${reservation.code}`}
        >
          مشاهده جزئیات
        </Button>

        {!isPast && (
          <Link
            href="/venues"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-10 min-w-40 border-[#2563EB] px-5 font-bold text-[#2563EB] hover:bg-[#2563EB]/5 hover:text-[#2563EB]'
            )}
            aria-label={`مشاهده مجموعه ${reservation.venueName}`}
          >
            مشاهده مجموعه
          </Link>
        )}
      </div>
    </article>
  );
}
