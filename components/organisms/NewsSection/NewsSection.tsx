import React from 'react';
import Link from 'next/link';
import { Card, Typography } from '@/components/atoms';

export const NewsSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <Typography
            as="h2"
            variant="heading"
            className="text-black text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Everything you need to trade the markets
          </Typography>
          <Link
            href="/news"
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            View all &gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* News Card */}
          <Card variant="default" className="p-0 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gray-300 relative">
              {/* Image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                News Image
              </div>
            </div>
            <div className="p-6">
              <Typography
                as="p"
                variant="body"
                className="text-gray-500 text-sm mb-2"
              >
                27 October 2023
              </Typography>
              <Typography
                as="h3"
                variant="heading"
                className="text-black text-xl font-bold mb-2"
              >
                Gulf economies to maintain robust growth...
              </Typography>
              <Link
                href="/news/gulf-economies"
                className="text-red-600 hover:text-red-700 font-semibold text-sm"
              >
                Read more
              </Link>
            </div>
          </Card>

          {/* Video Card */}
          <Card variant="default" className="p-0 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow relative">
            <div className="h-64 bg-gray-300 relative">
              {/* Video thumbnail placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-10 h-10 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <Typography
                as="h3"
                variant="heading"
                className="text-black text-xl font-bold"
              >
                Trade Forex with Premier Markets
              </Typography>
            </div>
          </Card>
        </div>

        {/* Wide Card */}
        <Card
          variant="default"
          className="bg-gray-900 text-white p-0 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="p-8">
              <Typography
                as="h3"
                variant="heading"
                className="text-white text-2xl font-bold mb-2"
              >
                Premier Markets - Market Cap Weighted PR (BKP)
              </Typography>
              <Typography
                as="p"
                variant="body"
                className="text-gray-400 mb-4"
              >
                Learn more about our market cap weighted pricing and how it can
                benefit your trading strategy.
              </Typography>
              <Link
                href="/news/market-cap"
                className="text-red-400 hover:text-red-300 font-semibold text-sm"
              >
                Read more
              </Link>
            </div>
            <div className="h-64 bg-gray-800 flex items-center justify-center">
              {/* Phone image placeholder */}
              <div className="text-gray-500">Phone Image</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
