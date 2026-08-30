// components/features/admin/RevenueChart.tsx
'use client';

import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/utils';
import type { RevenueTrendPoint } from '@/types/admin-panel/dashboardType';

export function RevenueChart({ data }: { data: RevenueTrendPoint[] }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.3);
  const max = Math.max(...data.map((d) => d.amount), 1);

  return (
    <div ref={ref} dir="rtl" className="bg-white rounded-[20px] border border-gray-100 p-5 h-full">
      <h3 className="font-bold text-[#1F2937] text-sm mb-6">روند درآمد (۱۴ روز اخیر)</h3>
      <div className="flex items-end gap-1.5 h-40">
        {data.map((point, i) => (
          <div key={i} className="flex-1 h-full flex items-end group">
            <div
              className={cn(
                'w-full bg-[#2563EB]/20 group-hover:bg-[#2563EB]/40 rounded-t-sm transition-[height,background-color] ease-out',
                isVisible ? '' : 'opacity-0'
              )}
              style={{
                height: isVisible ? `${(point.amount / max) * 100}%` : '0%',
                transitionDuration: '600ms',
                transitionDelay: `${i * 40}ms`,
              }}
              title={`${point.date}: ${point.amount.toLocaleString('fa-IR')} تومان`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-3 text-[10px] text-[#9CA3AF]">
        <span>{data[0]?.date}</span>
        <span>{data[data.length - 1]?.date}</span>
      </div>
    </div>
  );
}
