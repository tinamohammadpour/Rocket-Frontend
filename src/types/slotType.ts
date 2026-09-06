export interface CourtSlot {
  id: string;
  courtId: string;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  status: 'available' | 'reserved';
}
