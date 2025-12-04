import React from 'react';
import { Button, Typography } from '@/components/atoms';

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Typography
              as="h2"
              variant="heading"
              className="text-black text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Join{' '}
              <span className="text-red-600">50,000+</span> traders who trust
              us
            </Typography>
            <Typography
              as="p"
              variant="body"
              className="text-gray-700 text-lg leading-relaxed"
            >
              We pride ourselves on transparency, reliability, and exceptional
              customer service. Our commitment to providing a secure trading
              environment has earned the trust of thousands of traders worldwide.
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Join Today
              </Button>
              <Button variant="secondary" size="lg">
                Try Demo Account
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Banner with image placeholder */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <Typography
                  as="h3"
                  variant="heading"
                  className="text-white text-2xl md:text-3xl font-bold mb-4"
                >
                  Everything you need to trade the markets
                </Typography>
                <Button variant="white" size="md">
                  Explore Markets
                </Button>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
