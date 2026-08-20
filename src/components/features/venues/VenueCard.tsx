import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin } from 'lucide-react';
import type { Venue } from '@/types/venueType';

export function VenueCard({ venue }: { venue: Venue }) {
  return (
    <Link
      href={`/venues/${venue.id}`}
      className="group block bg-white rounded-[20px] overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#1F2937] text-xs font-medium px-2.5 py-1 rounded-full">
          {venue.courtType === 'indoor' ? 'سرپوشیده' : 'روباز'}
        </span>
      </div>

      <div dir="rtl" className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-[#1F2937] text-base line-clamp-1">{venue.name}</h3>
          <div className="flex items-center gap-1 shrink-0 text-sm text-[#1F2937]">
            <Star className="h-3.5 w-3.5 fill-[#84CC16] text-[#84CC16]" />
            <span className="font-medium">{venue.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[#6B7280] text-sm mb-4">
          <MapPin className="h-3.5 w-3.5" />
          <span>{venue.city}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-[#6B7280] text-xs">شروع قیمت از</span>
          <span className="font-bold text-[#2563EB] text-sm">
            {venue.pricePerHour.toLocaleString('fa-IR')} تومان / ساعت
          </span>
        </div>
      </div>
    </Link>
  );
}
