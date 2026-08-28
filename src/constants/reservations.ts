import type { Reservation, ReservationFilter } from '@/types/reservationType';

export const RESERVATION_FILTERS: ReadonlyArray<{
  label: string;
  value: ReservationFilter;
}> = [
  { label: 'همه', value: 'all' },
  { label: 'پیش رو', value: 'upcoming' },
  { label: 'گذشته', value: 'past' },
];

export const MOCK_RESERVATIONS: ReadonlyArray<Reservation> = [
  {
    id: '1',
    venueName: 'مجموعه ورزشی آریانا',
    courtName: 'زمین پدل شماره ۳',
    date: '۱۴۰۵/۰۶/۱۵',
    time: '۱۸:۰۰ تا ۱۹:۳۰',
    code: 'RKT-4821',
    price: 350000,
    status: 'confirmed',
  },
  {
    id: '2',
    venueName: 'باشگاه پدل تهران',
    courtName: 'زمین شماره ۱',
    date: '۱۴۰۵/۰۶/۱۸',
    time: '۲۰:۰۰ تا ۲۱:۳۰',
    code: 'RKT-4835',
    price: 420000,
    status: 'pending',
  },
  {
    id: '3',
    venueName: 'مجموعه ورزشی آریانا',
    courtName: 'زمین پدل شماره ۱',
    date: '۱۴۰۵/۰۵/۲۸',
    time: '۱۷:۰۰ تا ۱۸:۳۰',
    code: 'RKT-4790',
    price: 350000,
    status: 'past',
  },
  {
    id: '4',
    venueName: 'آکادمی پدل اصفهان',
    courtName: 'زمین شماره ۲',
    date: '۱۴۰۵/۰۵/۱۵',
    time: '۰۹:۰۰ تا ۱۰:۳۰',
    code: 'RKT-4712',
    price: 280000,
    status: 'past',
  },
  {
    id: '5',
    venueName: 'مجموعه پدل ونک',
    courtName: 'زمین شماره ۲',
    date: '۱۴۰۵/۰۶/۲۲',
    time: '۱۶:۰۰ تا ۱۷:۳۰',
    code: 'RKT-4860',
    price: 390000,
    status: 'confirmed',
  },
  {
    id: '6',
    venueName: 'باشگاه گرین کورت',
    courtName: 'زمین شماره ۴',
    date: '۱۴۰۵/۰۶/۲۵',
    time: '۱۹:۰۰ تا ۲۰:۳۰',
    code: 'RKT-4868',
    price: 460000,
    status: 'pending',
  },
  {
    id: '7',
    venueName: 'مجموعه راکت سیتی',
    courtName: 'زمین شماره ۳',
    date: '۱۴۰۵/۰۵/۰۸',
    time: '۱۸:۳۰ تا ۲۰:۰۰',
    code: 'RKT-4664',
    price: 320000,
    status: 'past',
  },
  {
    id: '8',
    venueName: 'پدل کلاب پارسیان',
    courtName: 'زمین شماره ۱',
    date: '۱۴۰۵/۰۴/۲۷',
    time: '۱۰:۰۰ تا ۱۱:۳۰',
    code: 'RKT-4598',
    price: 300000,
    status: 'past',
  },
];
