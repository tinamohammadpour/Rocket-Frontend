'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

import { FilterBar } from './FilterBar';
import { VenueCard } from './VenueCard';
import { mockVenues } from '@/constants/venues';
import type { VenueFilters } from '@/types/venueType';
import { cn } from '@/lib/utils';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

const PAGE_SIZE = 6;

export function VenuesPageClient() {
  const [filters, setFilters] = useState<VenueFilters>({
    search: '',
    city: 'all',
    courtType: 'all',
    sortBy: 'rating',
  });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const result = mockVenues.filter((v) => {
      const matchesSearch = v.name.includes(filters.search.trim());
      const matchesCity = filters.city === 'all' || v.city === filters.city;
      const matchesType = filters.courtType === 'all' || v.courtType === filters.courtType;
      return matchesSearch && matchesCity && matchesType;
    });

    return [...result].sort((a, b) => {
      if (filters.sortBy === 'price_asc') return a.pricePerHour - b.pricePerHour;
      if (filters.sortBy === 'price_desc') return b.pricePerHour - a.pricePerHour;
      return b.rating - a.rating;
    });
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFiltersChange = (next: VenueFilters) => {
    setFilters(next);
    setPage(1);
  };

  return (
    <div dir="rtl" className="max-w-6xl md:mx-auto px-4 md:px-8 py-8 md:py-12">
      <h1 className="font-bold text-[#1F2937] text-xl md:text-2xl mb-6">مجموعه های پدل</h1>

      <FilterBar filters={filters} onChange={handleFiltersChange} />

      {paged.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {paged.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-[#6B7280] text-sm">هیچ زمینی با این فیلترها پیدا نشد.</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination dir="rtl" className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="صفحه‌ی قبل"
                aria-disabled={page === 1}
                onClick={(e) => {
                  e.preventDefault();
                  if (page > 1) setPage(page - 1);
                }}
                className={cn(
                  'h-9 w-9 text-[#6B7280] cursor-pointer',
                  page === 1 && 'pointer-events-none opacity-40 cursor-not-allowed'
                )}
              >
                <ArrowRight className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={p === page}
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setPage(p);
                  }}
                  className={cn(
                    'h-9 w-9 text-sm font-medium cursor-pointer',
                    p === page
                      ? 'bg-[#2563EB] text-white hover:bg-[#2563EB] hover:text-white'
                      : 'text-[#6B7280]'
                  )}
                >
                  {p.toLocaleString('fa-IR')}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="صفحه‌ی بعد"
                aria-disabled={page === totalPages}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  if (page < totalPages) setPage(page + 1);
                }}
                className={cn(
                  'h-9 w-9 text-[#6B7280] cursor-pointer',
                  page === totalPages && 'pointer-events-none opacity-40 cursor-not-allowed'
                )}
              >
                <ArrowLeft className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
