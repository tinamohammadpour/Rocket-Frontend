import { cn } from '@/lib/utils';
import { StatCardProps } from '@/types/admin-panel/dashboardType';

export function StatCard({ label, value, icon: Icon }: StatCardProps) {
  return (
    <div dir="rtl" className="bg-white rounded-[20px] border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#6B7280] text-sm">{label}</span>
        <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
          <Icon className={cn('h-4.5 w-4.5 text-[#2563EB]')} />
        </div>
      </div>
      <span className="font-bold text-[#1F2937] text-2xl">{value}</span>
    </div>
  );
}
