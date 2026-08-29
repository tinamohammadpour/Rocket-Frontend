import Link from 'next/link';
import { Clock, MapPin, ArrowLeft } from 'lucide-react';
import { Reveal } from '@/components/shared/Reveal';
import type { TodaySlot } from '@/types/landingType';

const todaySlots: TodaySlot[] = [
  {
    id: '1',
    venueName: 'مجموعه ورزشی آرین',
    city: 'تهران',
    courtName: 'زمین ۱',
    time: '۱۸:۰۰',
    price: 450000,
  },
  {
    id: '2',
    venueName: 'پدل کلاب ولنسیا',
    city: 'تهران',
    courtName: 'زمین ۲',
    time: '۱۹:۳۰',
    price: 380000,
  },
  {
    id: '3',
    venueName: 'مجموعه‌ی راکت‌سیتی',
    city: 'اصفهان',
    courtName: 'زمین ۱',
    time: '۲۰:۰۰',
    price: 400000,
  },
  {
    id: '4',
    venueName: 'پدل هاب تهران',
    city: 'تهران',
    courtName: 'زمین ۳',
    time: '۲۱:۰۰',
    price: 500000,
  },
];

export function TodaySlotsSection() {
  return (
    <section dir="rtl" className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <Reveal>
        <h2 className="font-bold text-[#1F2937] text-2xl md:text-3xl mb-10">سانس‌های آزاد امروز</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {todaySlots.map((slot, i) => (
          <Reveal key={slot.id} delay={i * 80}>
            <Link
              href={`/venue/${slot.id}`}
              className="group block bg-white rounded-[18px] border border-gray-100 p-4 hover:shadow-lg shadow-sm hover:border-[#1F2937]/10 transition-all"
            >
              <div className="flex items-center gap-1.5 text-[#2563EB] font-bold text-lg mb-3">
                <Clock className="h-4 w-4" />
                <span dir="ltr">{slot.time}</span>
              </div>
              <p className="font-medium text-[#1F2937] text-sm mb-1 truncate">{slot.venueName}</p>
              <div className="flex items-center gap-1 text-[#6B7280] text-xs mb-3">
                <MapPin className="h-3 w-3" />
                <span>
                  {slot.city} · {slot.courtName}
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-[#6B7280] text-xs">
                  {slot.price.toLocaleString('fa-IR')} تومان
                </span>
                <ArrowLeft className="h-3.5 w-3.5 text-[#9CA3AF] group-hover:text-[#2563EB] group-hover:-translate-x-1 transition-all" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
