import { HeroSection } from '@/components/features/landing/HeroSection';
import { StepsSection } from '@/components/features/landing/StepsSection';
import { VenuesPreviewSection } from '@/components/features/landing/VenuesPreviewSection';
import { TodaySlotsSection } from '@/components/features/landing/TodaySlotSection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <VenuesPreviewSection />
      <TodaySlotsSection />
    </>
  );
}
