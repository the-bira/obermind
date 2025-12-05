'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Typography, TimeRangeButton } from '@/components/atoms';
import { MarketListItem, BuyersSellers } from '@/components/molecules';

const marketFilters = [
  'Most Traded',
  'Commodities',
  'Indices',
  'Cryptocurrencies',
  'Shares',
  'ETFs',
];

const timeRanges = ['1d', '1h', '4h', '1m', '5m', '15m', '30m', '1w'];

const marketItems = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 'P 524,0',
    change: '+3,25%',
    iconSrc: '/our-markets-btc-icon.png',
    iconAlt: 'Bitcoin',
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 'P 524,0',
    change: '+3,25%',
    iconSrc: '/our-markets-btc-icon.png',
    iconAlt: 'Bitcoin',
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 'P 524,0',
    change: '+3,25%',
    iconSrc: '/our-markets-btc-icon.png',
    iconAlt: 'Bitcoin',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 'P 524,0',
    change: '+3,25%',
    iconSrc: '/our-markets-btc-icon.png',
    iconAlt: 'Ethereum',
  },
];

export const MarketsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Most Traded');
  const [selectedMarket, setSelectedMarket] = useState(0);
  const [selectedTimeRange, setSelectedTimeRange] = useState('1h');

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
            Stay informed with the data that matters, on 17,000+ markets. Get the latest news, trader sentiment, spreads, price action and much more.
          </Typography>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {marketFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-2 rounded-full font-semibold transition-colors duration-200
                ${
                  activeFilter === filter
                    ? 'bg-red-600 text-white'
                    : 'bg-transparent border border-red-600 text-red-600 hover:bg-red-50'
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
            {marketItems.map((item, index) => (
              <MarketListItem
                key={`${item.symbol}-${index}`}
                name={item.name}
                symbol={item.symbol}
                price={item.price}
                change={item.change}
                iconSrc={item.iconSrc}
                iconAlt={item.iconAlt}
                isSelected={selectedMarket === index}
                onClick={() => setSelectedMarket(index)}
              />
            ))}
          </div>

          {/* Selected Market Detail */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gold Banner with BuyersSellers */}
            <div className="flex gap-4 items-start">
              <div className="relative rounded-lg overflow-hidden flex-1">
                <Image
                  src="/gold-banner.png"
                  alt="Gold Trading"
                  width={800}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <BuyersSellers
                  buyersPercent="66.93%"
                  sellersPercent="66.93%"
                  low="3686.38"
                  high="3788.96"
                />
                <a
                  href="#"
                  className="text-red-600 hover:text-red-700 text-sm font-semibold flex items-center gap-1"
                >
                  Browse all markets
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <Typography
                  as="h3"
                  variant="heading"
                  className="text-black text-xl font-bold mb-1"
                >
                  XAU/USD
                </Typography>
              </div>
              
              <div className="relative mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/our-markets-chart.png"
                  alt="Price Chart"
                  width={600}
                  height={300}
                  className="w-full h-auto"
                />
                
                {/* Time Range Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {timeRanges.map((range) => (
                    <TimeRangeButton
                      key={range}
                      label={range}
                      isSelected={selectedTimeRange === range}
                      onClick={() => setSelectedTimeRange(range)}
                    />
                  ))}
                </div>
              </div>
              
              <Typography
                as="p"
                variant="body"
                className="text-gray-500 text-xs text-center"
              >
                Past performance is not a reliable indicator of future results
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
