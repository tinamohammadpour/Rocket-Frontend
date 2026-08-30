export type ReservationStatus = 'confirmed' | 'pending' | 'past';

export type ReservationFilter = 'all' | 'upcoming' | 'past';

export interface Reservation {
  id: string;
  venueName: string;
  courtName: string;
  date: string;
  time: string;
  code: string;
  price: number;
  status: ReservationStatus;
}
