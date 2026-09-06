import { notFound } from 'next/navigation';

import { SlotsPageClient } from '@/components/features/slots/SlotsPageClient';
import { mockCourts } from '@/constants/courts';
import { mockSlots } from '@/constants/slots';
import { mockVenues } from '@/constants/venues';

type Props = {
  params: Promise<{
    venueId: string;
    courtId: string;
  }>;
};

export default async function CourtSlotsPage({ params }: Props) {
  const { venueId, courtId } = await params;

  const venue = mockVenues.find((venue) => venue.id === venueId);

  const court = mockCourts.find((court) => court.id === courtId && court.venueId === venueId);

  if (!venue || !court) {
    notFound();
  }

  const courtSlots = mockSlots.filter((slot) => slot.courtId === courtId);

  return (
    <SlotsPageClient
      venueId={venueId}
      venueName={venue.name}
      venueCity={venue.city}
      courtName={court.name}
      slots={courtSlots}
    />
  );
}
