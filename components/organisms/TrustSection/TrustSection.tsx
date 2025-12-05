import React from 'react';
import Image from 'next/image';
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
              Experience advanced trading tools, transparent and competitive pricing, lightning-fast execution, and dedicated support trusted by traders worldwide.
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                className="rounded-full transition-transform duration-200 hover:scale-105"
              >
                Start Trading
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full transition-transform duration-200 hover:scale-105"
              >
                Try Demo Account
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/trust-banner.png"
                alt="Everything you need to trade the markets"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
