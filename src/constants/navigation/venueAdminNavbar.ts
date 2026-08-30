import { Home, Building, Activity, Calendar, BookOpen, BarChart2, Bell } from 'lucide-react';

export const venueAdminNavItems = [
  {
    label: 'داشبورد',
    href: '/venue-admin/dashboard',
    icon: Home,
  },
  {
    label: 'مدیریت مجموعه',
    href: '/venue-admin/venue',
    icon: Building,
  },
  {
    label: 'مدیریت زمین‌ها',
    href: '/venue-admin/courts',
    icon: Activity,
  },
  {
    label: 'برنامه زمانی',
    href: '/venue-admin/schedules',
    icon: Calendar,
  },
  {
    label: 'مدیریت رزروها',
    href: '/venue-admin/reservations',
    icon: BookOpen,
  },
  {
    label: 'گزارش‌ها',
    href: '/venue-admin/reports',
    icon: BarChart2,
  },
  {
    label: 'اعلان‌ها',
    href: '/venue-admin/notifications',
    icon: Bell,
  },
];
