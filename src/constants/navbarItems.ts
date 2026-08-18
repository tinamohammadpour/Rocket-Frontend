import { Home, LayoutGrid, CalendarCheck, User } from 'lucide-react';

export const navItems = [
  { label: 'خانه', href: '/' },
  { label: 'مجموعه ها', href: '/venues' },
  { label: 'درباره ما', href: '/about' },
];

export const mobileNavItems = [
  { label: 'خانه', href: '/', icon: Home },
  { label: 'مجموعه‌ها', href: '/venues', icon: LayoutGrid },
  { label: 'رزروهای من', href: '/my-reservations', icon: CalendarCheck },
  { label: 'پروفایل', href: '/profile', icon: User },
];
