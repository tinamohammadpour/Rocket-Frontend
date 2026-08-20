export interface Venue {
  id: string;
  name: string;
  city: string;
  image: string;
  rating: number;
  pricePerHour: number;
  courtType: 'indoor' | 'outdoor';
}

export interface VenueFilters {
  search: string;
  city: string;
  courtType: 'all' | 'indoor' | 'outdoor';
  sortBy: 'price_asc' | 'price_desc' | 'rating';
}

export interface FilterBarProps {
  filters: VenueFilters;
  onChange: (filters: VenueFilters) => void;
}
