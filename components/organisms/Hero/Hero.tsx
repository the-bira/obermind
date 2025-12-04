import React from 'react';
import Image from 'next/image';
import { Typography } from "@/components/atoms";
import { HeroPrimaryButton, HeroSecondaryButton } from "@/components/molecules";
import { FinancialCard, type FinancialCardData } from "@/components/organisms";

export interface HeroProps {
  headline?: string;
  description?: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  financialCards?: FinancialCardData[];
}

const defaultFinancialCards: FinancialCardData[] = [
  {
    icon: "/usd-eur.png",
    pair: "USD/EUR",
    value: "0.00014",
    change: "-234.45",
    trend: "down",
  },
  {
    icon: "/usd-eur.png",
    pair: "XAUUSD",
    value: "0.00014",
    change: "-234.45",
    trend: "down",
  },
  {
    icon: "/usd-eur.png",
    pair: "USD/EUR",
    value: "0.00014",
    change: "-234.45",
    trend: "down",
  },
  {
    icon: "/usd-eur.png",
    pair: "XAUUSD",
    value: "0.00014",
    change: "-234.45",
    trend: "down",
  },
];

export const Hero: React.FC<HeroProps> = ({
  headline = "Trade Forex with Premier Markets",
  description = "Access global markets with advanced trading tools, competitive spreads, and institutional grade execution.",
  primaryButton = { label: "Start Trading", href: "/register" },
  secondaryButton = { label: "Try Demo Account", href: "/demo" },
  financialCards = defaultFinancialCards,
}) => {
  return (
    <section className="relative">
      {/* Red Gradient Section */}
      <div
        className="text-white py-20 md:py-32"
        style={{
          background:
            "linear-gradient(102.87deg, #320002 -27.78%, #900006 2.52%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Typography
                as="h1"
                variant="heading"
                className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                {headline}
              </Typography>
              <Typography
                as="p"
                variant="body"
                className="text-white text-lg md:text-xl opacity-90 max-w-xl"
              >
                {description}
              </Typography>
              <div className="flex flex-wrap gap-4">
                <HeroPrimaryButton
                  label={primaryButton.label}
                  href={primaryButton.href}
                />
                <HeroSecondaryButton
                  label={secondaryButton.label}
                  href={secondaryButton.href}
                />
              </div>
            </div>

            {/* Right Content - iPhone Mockup */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/Iphone-mockup.png"
                  alt="Premier Markets Trading App"
                  width={400}
                  height={800}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section with Financial Cards */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {financialCards.map((card, index) => (
              <FinancialCard key={index} data={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};