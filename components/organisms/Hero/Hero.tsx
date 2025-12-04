import React from 'react';
import Image from 'next/image';
import { Button, Typography } from '@/components/atoms';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Typography
              as="h1"
              variant="heading"
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Trade Forex with Premier Markets
            </Typography>
            <Typography
              as="p"
              variant="body"
              className="text-white text-lg md:text-xl opacity-90 max-w-xl"
            >
              Experience competitive spreads, fast execution, and 24/5 support
              with Premier Markets. Access over 17,000+ instruments including
              Forex, Stocks, Indices, Commodities, and Cryptocurrencies.
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button variant="white" size="lg">
                Free Demo
              </Button>
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                Open Account
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Placeholder for phone mockups */}
              <div className="relative aspect-[9/16] bg-black rounded-3xl shadow-2xl p-4">
                <div className="w-full h-full bg-gray-900 rounded-2xl flex flex-col">
                  {/* Mock Trading App UI */}
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-white text-sm font-semibold">
                        Vanguard S&P 500
                      </div>
                      <div className="text-green-400 text-xs">+0.15%</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-white text-sm font-semibold">
                        Apple Inc.
                      </div>
                      <div className="text-green-400 text-xs">+0.23%</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-white text-sm font-semibold">
                        Amazon.com Inc.
                      </div>
                      <div className="text-red-400 text-xs">-0.12%</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Second phone slightly offset */}
              <div className="absolute -right-8 -top-8 w-3/4 aspect-[9/16] bg-black rounded-3xl shadow-2xl p-4 opacity-80">
                <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
