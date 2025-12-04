import React from 'react';
import { Card, Typography, Icon } from '@/components/atoms';

const features = [
  {
    title: 'Creating goals and indicators',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    title: 'Get flexible leverage',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M7 14l5-5 5 5z" />
      </svg>
    ),
  },
  {
    title: 'Round-the-clock support',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    title: 'Customizable price alerts',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
      </svg>
    ),
  },
];

export const TradingFeatures: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Typography
            as="h2"
            variant="heading"
            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Empower Your Trading
          </Typography>
          <Typography
            as="p"
            variant="body"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Access powerful tools and features designed to enhance your trading
            experience.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="default"
              className="bg-gray-800 border border-gray-700 hover:border-red-600 transition-colors p-6"
            >
              <div className="text-red-600 mb-4">{feature.icon}</div>
              <Typography
                as="h3"
                variant="heading"
                className="text-white text-lg font-bold"
              >
                {feature.title}
              </Typography>
            </Card>
          ))}
        </div>

        {/* Play button in center */}
        <div className="flex justify-center mt-12">
          <button className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="w-8 h-8 ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
