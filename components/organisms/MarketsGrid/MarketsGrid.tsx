'use client';

import React, { useState } from 'react';
import { Button, Card, Typography } from '@/components/atoms';
import { PriceDisplay } from '@/components/molecules';

const marketFilters = [
  'All Markets',
  'Commodities',
  'Indices',
  'Cryptocurrencies',
  'Forex',
  'ETFs',
];

const instruments = [
  { name: 'Gold', price: '3773.30', change: '+0.04%', symbol: 'XAUUSD' },
  { name: 'Bitcoin', price: '29,000.00', change: '+0.23%', symbol: 'BTCUSD' },
  {
    name: 'Ethereum',
    price: '1,800.00',
    change: '+0.42%',
    symbol: 'ETHUSD',
  },
];

export const MarketsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Markets');

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Typography
            as="h2"
            variant="heading"
            className="text-black text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Our Markets
          </Typography>
          <Typography
            as="p"
            variant="body"
            className="text-gray-700 text-lg max-w-2xl mx-auto"
          >
            Explore our wide range of trading instruments across multiple asset
            classes.
          </Typography>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {marketFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-2 rounded-lg font-semibold transition-colors duration-200
                ${
                  activeFilter === filter
                    ? 'bg-red-600 text-white'
                    : 'bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-50'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Market Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Instrument List */}
          <div className="space-y-4">
            {instruments.map((instrument) => (
              <Card
                key={instrument.symbol}
                variant="outlined"
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold">
                        {instrument.name[0]}
                      </span>
                    </div>
                    <div>
                      <Typography
                        as="p"
                        variant="body"
                        className="text-gray-900 font-semibold"
                      >
                        {instrument.name}
                      </Typography>
                    </div>
                  </div>
                  <PriceDisplay
                    price={instrument.price}
                    changePercent={instrument.change}
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Selected Market Detail */}
          <div className="lg:col-span-2">
            <Card variant="elevated" className="p-6">
              <Typography
                as="h3"
                variant="heading"
                className="text-black text-2xl font-bold mb-6"
              >
                Gold
              </Typography>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <Typography
                    as="p"
                    variant="body"
                    className="text-gray-600 text-sm mb-2"
                  >
                    Bid
                  </Typography>
                  <Typography
                    as="p"
                    variant="body"
                    className="text-black text-xl font-bold"
                  >
                    3773.30
                  </Typography>
                </div>
                <div>
                  <Typography
                    as="p"
                    variant="body"
                    className="text-gray-600 text-sm mb-2"
                  >
                    Ask
                  </Typography>
                  <Typography
                    as="p"
                    variant="body"
                    className="text-black text-xl font-bold"
                  >
                    3773.40
                  </Typography>
                </div>
              </div>
              {/* Chart placeholder */}
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <Typography as="p" variant="body" className="text-gray-500">
                  Price Chart Placeholder
                </Typography>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
