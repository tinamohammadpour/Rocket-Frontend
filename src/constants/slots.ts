import type { CourtSlot } from '@/types/slotType';

export const mockSlots: CourtSlot[] = [
  // Court 1 - Today
  {
    id: '1',
    courtId: '1',
    date: '2026-09-06',
    startTime: '16:00',
    endTime: '17:00',
    price: 450000,
    status: 'available',
  },
  {
    id: '2',
    courtId: '1',
    date: '2026-09-06',
    startTime: '17:00',
    endTime: '18:00',
    price: 450000,
    status: 'reserved',
  },
  {
    id: '3',
    courtId: '1',
    date: '2026-09-06',
    startTime: '18:00',
    endTime: '19:00',
    price: 450000,
    status: 'available',
  },

  // Court 1 - Tomorrow
  {
    id: '4',
    courtId: '1',
    date: '2026-09-07',
    startTime: '15:00',
    endTime: '16:00',
    price: 450000,
    status: 'available',
  },
  {
    id: '5',
    courtId: '1',
    date: '2026-09-07',
    startTime: '17:00',
    endTime: '18:00',
    price: 450000,
    status: 'available',
  },
  {
    id: '6',
    courtId: '1',
    date: '2026-09-07',
    startTime: '20:00',
    endTime: '21:00',
    price: 450000,
    status: 'reserved',
  },

  // Court 1 - Next day
  {
    id: '7',
    courtId: '1',
    date: '2026-09-08',
    startTime: '16:00',
    endTime: '17:00',
    price: 450000,
    status: 'available',
  },
  {
    id: '8',
    courtId: '1',
    date: '2026-09-08',
    startTime: '19:00',
    endTime: '20:00',
    price: 450000,
    status: 'available',
  },

  // Court 2
  {
    id: '9',
    courtId: '2',
    date: '2026-09-06',
    startTime: '18:00',
    endTime: '19:00',
    price: 420000,
    status: 'reserved',
  },
  {
    id: '10',
    courtId: '2',
    date: '2026-09-07',
    startTime: '19:00',
    endTime: '20:00',
    price: 420000,
    status: 'available',
  },

  // Court 3
  {
    id: '11',
    courtId: '3',
    date: '2026-09-06',
    startTime: '17:00',
    endTime: '18:00',
    price: 380000,
    status: 'available',
  },
  {
    id: '12',
    courtId: '3',
    date: '2026-09-07',
    startTime: '20:00',
    endTime: '21:00',
    price: 380000,
    status: 'available',
  },
];
