import React from 'react';
import {
  Header,
  Hero,
  MarketsSection,
  TrustSection,
  MarketsGrid,
  TradingFeatures,
  WithdrawalsSection,
  NewsSection,
  TestimonialsGrid,
  CTASection,
  Footer,
} from '@/components/organisms';

export const LandingPageTemplate: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MarketsSection />
        <TrustSection />
        <MarketsGrid />
        <TradingFeatures />
        <WithdrawalsSection />
        <NewsSection />
        <TestimonialsGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
