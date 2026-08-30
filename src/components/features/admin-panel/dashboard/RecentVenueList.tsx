import Link from 'next/link';
import { Building2, ArrowLeft, Plus } from 'lucide-react';
import type { RecentVenue } from '@/types/admin-panel/dashboardType';

export function RecentVenuesList({ venues }: { venues: RecentVenue[] }) {
  return (
    <div dir="rtl" className="bg-white rounded-[20px] border border-gray-100 p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-[#1F2937] text-sm">مجموعه‌های اخیراً اضافه‌شده</h3>
        <Link
          href="/admin/venues/new"
          className="text-xs text-[#2563EB] hover:underline flex items-center gap-1"
        >
          <Plus className="h-3 w-3" />
          افزودن مجموعه
        </Link>
      </div>

      {venues.length === 0 ? (
        <p className="text-sm text-[#9CA3AF] py-6 text-center">هنوز مجموعه‌ای اضافه نشده.</p>
      ) : (
        <ul className="space-y-3">
          {venues.map((venue) => (
            <li
              key={venue.id}
              className="flex items-center justify-between gap-3 py-2 border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#F5F7F2] flex items-center justify-center shrink-0">
                  <Building2 className="h-4 w-4 text-[#6B7280]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#1F2937] truncate">{venue.name}</p>
                  <p className="text-xs text-[#9CA3AF]">
                    {venue.city} · {venue.addedAt}
                  </p>
                </div>
              </div>
              <Link
                href={`/admin/venues/${venue.id}`}
                className="text-xs font-medium text-[#2563EB] hover:underline shrink-0 flex items-center gap-1"
              >
                جزئیات
                <ArrowLeft className="h-3 w-3" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
