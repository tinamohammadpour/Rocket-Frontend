'use client';

import { FilterBarProps, VenueFilters } from '@/types/venueType';
import { Search, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const cities = ['تهران', 'اصفهان', 'شیراز', 'مشهد', 'کرج'];

export function FilterBar({ filters, onChange }: FilterBarProps) {
  const update = (patch: Partial<VenueFilters>) => onChange({ ...filters, ...patch });

  const getCityLabel = (value: string) => {
    if (value === 'all') return 'همه شهرها';
    return value;
  };

  const getCourtTypeLabel = (value: string) => {
    const map: Record<string, string> = {
      all: 'نوع زمین',
      indoor: 'سرپوشیده',
      outdoor: 'روباز',
    };
    return map[value] || value;
  };

  const getSortByLabel = (value: string) => {
    const map: Record<string, string> = {
      rating: 'محبوب‌ترین',
      price_asc: 'ارزان‌ترین',
      price_desc: 'گران‌ترین',
    };
    return map[value] || value;
  };

  return (
    <div
      dir="rtl"
      className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-3 md:p-4 min-w-0"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-3 min-w-0">
        <div className="relative flex-1 min-w-0">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
          <input
            value={filters.search}
            onChange={(e) => update({ search: e.target.value })}
            type="text"
            placeholder="جستجوی نام مجموعه..."
            className="w-full h-11 rounded-xl bg-[#F5F7F2] pr-10 pl-3 text-sm text-[#1F2937] placeholder:text-[#9CA3AF] outline-none focus:ring-[#2563EB]/30"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto min-w-0">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button className="h-11 rounded-xl bg-[#F5F7F2] px-3 pr-3 pl-8 text-sm text-[#1F2937] outline-none cursor-pointer flex items-center gap-1 whitespace-nowrap">
                  {getCityLabel(filters.city)}
                  <ChevronDown className="h-4 w-4 text-[#9CA3AF] mr-1" />
                </button>
              }
            ></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-xl shadow-lg border border-gray-100 p-1 min-w-[140px]">
              <DropdownMenuItem
                onClick={() => update({ city: 'all' })}
                className="text-sm text-[#1F2937] cursor-pointer hover:bg-[#F5F7F2] rounded-lg px-3 py-2"
              >
                همه شهرها
              </DropdownMenuItem>
              {cities.map((city) => (
                <DropdownMenuItem
                  key={city}
                  onClick={() => update({ city })}
                  className="text-sm text-[#1F2937] cursor-pointer hover:bg-[#F5F7F2] rounded-lg px-3 py-2"
                >
                  {city}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button className="h-11 rounded-xl bg-[#F5F7F2] px-3 pr-3 pl-8 text-sm text-[#1F2937] outline-none cursor-pointer flex items-center gap-1 whitespace-nowrap">
                  {getCourtTypeLabel(filters.courtType)}
                  <ChevronDown className="h-4 w-4 text-[#9CA3AF] mr-1" />
                </button>
              }
            ></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-xl shadow-lg border border-gray-100 p-1 min-w-[140px]">
              <DropdownMenuItem
                onClick={() => update({ courtType: 'all' })}
                className="text-sm text-[#1F2937] cursor-pointer hover:bg-[#F5F7F2] rounded-lg px-3 py-2"
              >
                نوع زمین
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => update({ courtType: 'indoor' })}
                className="text-sm text-[#1F2937] cursor-pointer hover:bg-[#F5F7F2] rounded-lg px-3 py-2"
              >
                سرپوشیده
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => update({ courtType: 'outdoor' })}
                className="text-sm text-[#1F2937] cursor-pointer hover:bg-[#F5F7F2] rounded-lg px-3 py-2"
              >
                روباز
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button className="h-11 rounded-xl bg-[#F5F7F2] px-3 pr-3 pl-8 text-sm text-[#1F2937] outline-none cursor-pointer flex items-center gap-1 whitespace-nowrap">
                  {getSortByLabel(filters.sortBy)}
                  <ChevronDown className="h-4 w-4 text-[#9CA3AF] mr-1" />
                </button>
              }
            ></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-xl shadow-lg border border-gray-100 p-1 min-w-[140px]">
              <DropdownMenuItem
                onClick={() => update({ sortBy: 'rating' })}
                className="text-sm text-[#1F2937] cursor-pointer hover:bg-[#F5F7F2] rounded-lg px-3 py-2"
              >
                محبوب‌ترین
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => update({ sortBy: 'price_asc' })}
                className="text-sm text-[#1F2937] cursor-pointer hover:bg-[#F5F7F2] rounded-lg px-3 py-2"
              >
                ارزان‌ترین
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => update({ sortBy: 'price_desc' })}
                className="text-sm text-[#1F2937] cursor-pointer hover:bg-[#F5F7F2] rounded-lg px-3 py-2"
              >
                گران‌ترین
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
