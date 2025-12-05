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
    <section className="min-h-screen w-full bg-linear-to-b from-gray-900 to-black text-white py-20 relative">
      {/* Diagonal Fade Center Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #444446 1px, transparent 1px),
            linear-gradient(to bottom, #444446 1px, transparent 1px)
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
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Unlock advanced tools, insights, and support to maximise your
            trading potential.
          </Typography>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Logo in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-black w-24 h-24 flex border border-opacity-10 border-neutral-700 items-center justify-center rounded-full">
              <div className=" bg-black w-18 h-18 border-opacity-10 border border-neutral-700 flex items-center justify-center rounded-full">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo-radar.png"
                    alt="Radar Logo"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  bg-transparent
                  p-9
                  relative
                  overflow-hidden
                  transition-all duration-300
                  group
                  flex
                  flex-col
                  items-center
                  justify-center
                  hover:border-red-600
                "
                onMouseEnter={(e) => {
                  // Gradientes lineares que partem do centro e vão na diagonal oposta
                  // Index 0: Charting tools - do canto inferior direito para superior esquerdo (135deg)
                  // Index 1: Get flexible leverage - do canto inferior esquerdo para superior direito (45deg)
                  // Index 2: Round-the-clock - do superior direito para inferior esquerdo (225deg)
                  // Index 3: Customisable price - do superior esquerdo para inferior direito (315deg)
                  const gradientAngles = [
                    "165deg", // Charting tools: inferior direito -> superior esquerdo
                    "195deg", // Get flexible leverage: inferior esquerdo -> superior direito
                    "30deg", // Round-the-clock: superior direito -> inferior esquerdo
                    "335deg", // Customisable price: superior esquerdo -> inferior direito
                  ];
                  // Gradiente linear que parte do centro (50% stop) e vai na direção especificada
                  e.currentTarget.style.background = `linear-gradient(${gradientAngles[index]}, transparent 0%, transparent 40%, rgba(226, 0, 9, 0.41) 50%, #1F2937 100%)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"; // bg-gray-700
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
                  as="h5"
                  variant="heading"
                  className="text-white font-bold mb-3 relative z-10"
                >
                  {feature.title}
                </Typography>
                <Typography
                  as="p"
                  variant="body"
                  className="text-slate-300 text-base relative z-10 w-[50%] text-center"
                >
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
