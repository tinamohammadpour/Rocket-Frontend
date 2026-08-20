import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';

export function AboutCTA() {
  return (
    <section className="bg-[#F9FAFB] py-16 border-t border-gray-100">
      <Reveal className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#1F2937] mb-3">
          حالا که با راکت آشنا شدید
        </h2>
        <p className="text-[#6B7280] mb-6">وقتشه یه بار هم شده تجربه‌اش کنید.</p>
        <Link
          href="/venues"
          className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:zoom-90 cursor-pointer"
        >
          مشاهده‌ی زمین‌های پدل ←
        </Link>
      </Reveal>
    </section>
  );
}
