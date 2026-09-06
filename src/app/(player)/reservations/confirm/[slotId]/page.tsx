import { notFound } from 'next/navigation';

import { ReservationConfirmPageClient } from '@/components/features/reservation/ReservationConfirmPageClient';
import { mockSlots } from '@/constants/slots';
import { mockCourts } from '@/constants/courts';
import { mockVenues } from '@/constants/venues';

type Props = {
  params: Promise<{
    slotId: string;
  }>;
};

export default async function ReservationConfirmPage({ params }: Props) {
  const { slotId } = await params;

  const slot = mockSlots.find((slot) => slot.id === slotId);

  if (!slot || slot.status !== 'available') {
    notFound();
  }

  const court = mockCourts.find((court) => court.id === slot.courtId);

  if (!court) {
    notFound();
  }

  const venue = mockVenues.find((venue) => venue.id === court.venueId);

  if (!venue) {
    notFound();
  }

  return <ReservationConfirmPageClient slot={slot} court={court} venue={venue} />;
}
