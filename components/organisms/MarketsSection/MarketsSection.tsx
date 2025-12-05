import React from 'react';
import { Typography } from "@/components/atoms";
import { MarketCard, MarketsFeatureButton } from "@/components/molecules";

const markets = [
  {
    title: "Forex",
    description: "Trade the largest financial market in the world.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
      </svg>
    ),
  },
  {
    title: "Stocks",
    description: "Trade shares of leading global companies.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Indices",
    description: "Trade the performance of entire economies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
      </svg>
    ),
  },
  {
    title: "Commodities",
    description: "Trade precious metals, energies, and agricultural products.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export const MarketsSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-red-700 to-slate-900 text-white py-20">
      <div className="absolute inset-0 flex z-0 opacity-60 pointer-events-none">
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            key={i}
            className="h-full flex-1"
            style={{
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.01) 0%, rgba(0, 0, 0, 0.2) 76.04%, rgba(255, 255, 255, 0.01) 100%)",
              backgroundBlendMode: "overlay",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 relative z-10">
          <Typography
            as="h2"
            variant="heading"
            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Access <span className="text-red-500">17,000+</span> markets all in
            one
          </Typography>
          <Typography
            as="p"
            variant="body"
            className="text-white text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
          >
            Trade forex, shares, indices, and commodities with competitive
            spreads, deep liquidity, and seamless execution.
          </Typography>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
          <MarketsFeatureButton
            iconSrc="/markets-sections-red-button-deposit-fees.png"
            iconAlt="Deposit Fees"
            text="$0 Deposit Fees"
          />
          <MarketsFeatureButton
            iconSrc="/markets-sections-red-buton-spreads.png"
            iconAlt="Spreads"
            text="Spreads from 0.0 pips"
          />
          <MarketsFeatureButton
            iconSrc="/market-sections-red-button-secure-funds.png"
            iconAlt="Secure Funds"
            text="Secure Funds"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {markets.map((market) => (
            <MarketCard
              key={market.title}
              title={market.title}
              description={market.description}
              icon={market.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
