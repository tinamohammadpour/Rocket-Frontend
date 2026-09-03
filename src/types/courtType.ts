export interface Court {
  id: string;
  venueId: string;
  name: string;
  image: string;
  courtType: 'indoor' | 'outdoor';
  pricePerHour: number;
  availableToday: boolean;
  availableSlotsCount: number;
}
