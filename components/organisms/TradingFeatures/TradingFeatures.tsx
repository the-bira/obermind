'use client';

import React from 'react';
import Image from 'next/image';
import { Typography } from '@/components/atoms';

const features = [
  {
    title: 'Charting tools and indicators',
    description:
      'Sharpen your analysis with an array of intuitive charts, drawing tools and 100+ indicators.',
    iconSrc: '', // Will be provided later
  },
  {
    title: 'Get flexible leverage',
    description:
      'Trade larger positions and maximise your return potential with lower margin requirements.',
    iconSrc: '', // Will be provided later
  },
  {
    title: 'Round-the-clock support',
    description:
      'Our dedicated experts are available 24/5 to guide and assist you at every step.',
    iconSrc: '', // Will be provided later
  },
  {
    title: 'Customisable price alerts',
    description:
      'Set real-time alerts to track asset movements and stay ahead with your strategy.',
    iconSrc: '', // Will be provided later
  },
];

export const TradingFeatures: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white py-20 relative">
      {/* Diagonal Fade Center Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6B7280 1px, transparent 1px),
            linear-gradient(to bottom, #6B7280 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
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
            className="text-gray-100 text-lg max-w-2xl mx-auto"
          >
            Unlock advanced tools, insights, and support to maximise your
            trading potential.
          </Typography>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Logo in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-16 h-16">
              <Image
                src="/logo-radar.png"
                alt="Radar Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Cards Grid 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  bg-black
                  border border-gray-700
                  rounded-lg
                  p-6
                  relative
                  overflow-hidden
                  transition-all duration-300
                  group
                  hover:border-red-600
                "
                style={{
                  background: "#000000",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "radial-gradient(circle at 50% 50%, rgba(226, 0, 9, 0.41) 0%, #000000 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#000000";
                }}
              >
                {feature.iconSrc && (
                  <div className="text-red-600 mb-4 relative z-10">
                    <div className="relative w-12 h-12">
                      <Image
                        src={feature.iconSrc}
                        alt={feature.title}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                )}
                <Typography
                  as="h3"
                  variant="heading"
                  className="text-white text-lg font-bold mb-2 relative z-10"
                >
                  {feature.title}
                </Typography>
                <Typography
                  as="p"
                  variant="body"
                  className="text-gray-400 text-sm relative z-10"
                >
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Play button in center */}
        <div className="flex justify-center mt-12 relative z-10">
          <button className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
