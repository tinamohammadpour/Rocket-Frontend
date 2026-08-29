import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { VenueCard } from '@/components/features/venues/VenueCard';
import type { Venue } from '@/types/venueType';
import { Reveal } from '@/components/shared/Reveal';

const featuredVenues: Venue[] = [
  {
    id: '1',
    name: 'مجموعه ورزشی آرین',
    city: 'تهران',
    image: '/images/venues/1.jpg',
    rating: 4.8,
    pricePerHour: 450000,
    courtType: 'indoor',
  },
  {
    id: '3',
    name: 'مجموعه‌ی راکت‌سیتی',
    city: 'اصفهان',
    image: '/images/venues/3.jpg',
    rating: 4.9,
    pricePerHour: 400000,
    courtType: 'indoor',
  },
  {
    id: '7',
    name: 'پدل هاب تهران',
    city: 'تهران',
    image: '/images/venues/7.jpg',
    rating: 4.9,
    pricePerHour: 500000,
    courtType: 'indoor',
  },
];

export function VenuesPreviewSection() {
  return (
    <section dir="rtl" className="bg-[#F5F7F2] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Reveal>
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-bold text-[#1F2937] text-2xl md:text-3xl">مجموعه‌های محبوب</h2>
            <Link
              href="/venue"
              className="flex items-center gap-1.5 text-sm font-medium text-[#2563EB] hover:underline shrink-0"
            >
              <span>مشاهده‌ی همه</span>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredVenues.map((venue, i) => (
            <Reveal key={venue.id} delay={i * 100}>
              <VenueCard venue={venue} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
