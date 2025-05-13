
import React from 'react';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import StatsSection from '@/components/StatsSection';
import CtaSection from '@/components/CtaSection';
import PartnersSection from '@/components/PartnersSection';

const Index = () => {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <StatsSection />
      <TestimonialSection />
      <PartnersSection />
      <CtaSection />
    </div>
  );
};

export default Index;
