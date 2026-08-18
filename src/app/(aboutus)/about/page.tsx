import { AboutCTA } from '@/components/features/aboutus/AboutCTA';
import { AboutFeatures } from '@/components/features/aboutus/AboutFeatures';
import { AboutHero } from '@/components/features/aboutus/AboutHero';
import { AboutHowItWorks } from '@/components/features/aboutus/AboutHowItWorks';
import { AboutStats } from '@/components/features/aboutus/AboutStats';

export default function AboutPage() {
  return (
    <div dir="rtl">
      <AboutHero />
      <AboutStats />
      <AboutFeatures />
      <AboutHowItWorks />
      <AboutCTA />
    </div>
  );
}
