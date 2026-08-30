import { CalendarCheck, Wallet, Building2, Users } from 'lucide-react';
import { StatCard } from '@/components/features/admin-panel/dashboard/StatCard';
import { RevenueChart } from '@/components/features/admin-panel/dashboard/BookingsTrendChart';
import { RecentVenuesList } from '@/components/features/admin-panel/dashboard/RecentVenueList';
import type {
  DashboardStats,
  RevenueTrendPoint,
  RecentVenue,
} from '@/types/admin-panel/dashboardType';

const mockStats: DashboardStats = {
  todayReservations: 34,
  monthlyRevenue: 128500000,
  activeVenues: 12,
  totalPlayers: 340,
};

const mockTrend: RevenueTrendPoint[] = [
  { date: '۱ آبان', amount: 4200000 },
  { date: '۲ آبان', amount: 5100000 },
  { date: '۳ آبان', amount: 3800000 },
  { date: '۴ آبان', amount: 6200000 },
  { date: '۵ آبان', amount: 7400000 },
  { date: '۶ آبان', amount: 5900000 },
  { date: '۷ آبان', amount: 8100000 },
  { date: '۸ آبان', amount: 6700000 },
  { date: '۹ آبان', amount: 7200000 },
  { date: '۱۰ آبان', amount: 9300000 },
  { date: '۱۱ آبان', amount: 8600000 },
  { date: '۱۲ آبان', amount: 7900000 },
  { date: '۱۳ آبان', amount: 9800000 },
  { date: '۱۴ آبان', amount: 10400000 },
];

const mockRecentVenues: RecentVenue[] = [
  {
    id: '1',
    name: 'مجموعه ورزشی نگین',
    city: 'تهران',
    ownerPhone: '09121234567',
    addedAt: '۲ روز پیش',
  },
  {
    id: '2',
    name: 'باشگاه پدل الوند',
    city: 'کرج',
    ownerPhone: '09351234567',
    addedAt: '۴ روز پیش',
  },
  {
    id: '3',
    name: 'کمپ پدل ساحل',
    city: 'بندرعباس',
    ownerPhone: '09171234567',
    addedAt: '۵ روز پیش',
  },
];

export default function AdminDashboardPage() {
  return (
    <div dir="rtl" className="space-y-6 p-5">
      <h1 className="font-bold text-[#1F2937] text-xl">داشبورد</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="رزروهای امروز"
          value={mockStats.todayReservations.toLocaleString('fa-IR')}
          icon={CalendarCheck}
        />
        <StatCard
          label="درآمد این ماه"
          value={`${mockStats.monthlyRevenue.toLocaleString('fa-IR')} تومان`}
          icon={Wallet}
        />
        <StatCard
          label="مجموعه‌های فعال"
          value={mockStats.activeVenues.toLocaleString('fa-IR')}
          icon={Building2}
        />
        <StatCard
          label="بازیکنان ثبت‌نام‌شده"
          value={mockStats.totalPlayers.toLocaleString('fa-IR')}
          icon={Users}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <RevenueChart data={mockTrend} />
        </div>
        <RecentVenuesList venues={mockRecentVenues} />
      </div>
    </div>
  );
}
