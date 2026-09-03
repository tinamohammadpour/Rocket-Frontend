import { notFound } from 'next/navigation';

import { CourtsPageClient } from '@/components/features/courts/CourtsPageClient';
import { mockCourts } from '@/constants/courts';
import { mockVenues } from '@/constants/venues';

type Props = {
  params: Promise<{
    venueId: string;
  }>;
};

export default async function VenueCourtsPage({ params }: Props) {
  const { venueId } = await params;

  const venue = mockVenues.find((venue) => venue.id === venueId);

  if (!venue) {
    notFound();
  }

  const venueCourts = mockCourts.filter((court) => court.venueId === venueId);

  return <CourtsPageClient courts={venueCourts} venueName={venue.name} venueCity={venue.city} />;
}
