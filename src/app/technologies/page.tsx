// Technologies page
import { Metadata } from 'next';
import { TechnologiesHero } from './TechnologiesHero';
import { TechStack } from './TechStack';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Technologies',
  description:
    'Explore the cutting-edge technologies we use to build world-class digital solutions. From React to AI/ML to blockchain.',
};

export default function TechnologiesPage() {
  return (
    <>
      <TechnologiesHero />
      <TechStack />
      <CTASection />
    </>
  );
}
