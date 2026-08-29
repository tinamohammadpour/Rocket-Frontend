import { Search, CreditCard, Trophy } from 'lucide-react';

export const steps = [
  {
    number: '۱',
    title: 'زمین را پیدا کن',
    desc: 'بر اساس شهر، زمان و امکانات، زمین موردنظرت رو پیدا کن.',
    icon: Search,
  },
  {
    number: '۲',
    title: 'آنلاین رزرو و پرداخت کن',
    desc: 'در چند ثانیه رزروت قطعی می‌شه، بدون تماس تلفنی.',
    icon: CreditCard,
  },
  {
    number: '۳',
    title: 'در زمین حاضر شو و بازی کن',
    desc: 'فقط سر ساعت برو زمین — بقیه‌ش با راکته.',
    icon: Trophy,
  },
];

export interface TodaySlot {
  id: string;
  venueName: string;
  city: string;
  courtName: string;
  time: string;
  price: number;
}
