import { AboutCTA } from '@/components/features/about/AboutCTA';
import { AboutFeatures } from '@/components/features/about/AboutFeatures';
import { AboutHero } from '@/components/features/about/AboutHero';
import { AboutHowItWorks } from '@/components/features/about/AboutHowItWorks';
import { AboutStats } from '@/components/features/about/AboutStats';

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
