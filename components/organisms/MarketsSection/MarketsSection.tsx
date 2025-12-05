import React from 'react';
import { Typography } from "@/components/atoms";
import { MarketCard, MarketsFeatureButton } from "@/components/molecules";

const markets = [
  {
    title: "Forex",
    description:
      "Trade the world's largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.",
    iconSrc: "/market-card-forex.png",
    iconAlt: "Forex",
  },
  {
    title: "Stocks",
    description:
      "From Wall Street to global tech leaders, follow the world's leading companies and react to market moves in real time.",
    iconSrc: "/market-card-stocks.png",
    iconAlt: "Stocks",
  },
  {
    title: "Indices",
    description:
      "Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.",
    iconSrc: "/market-card-indices.png",
    iconAlt: "Indices",
  },
  {
    title: "Commodities",
    description:
      "Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.",
    iconSrc: "/market-card-commodities.png",
    iconAlt: "Commodities",
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
              iconSrc={market.iconSrc}
              iconAlt={market.iconAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
