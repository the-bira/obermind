import React from 'react';
import Image from "next/image";
import { Rocket, Shield, Star } from "lucide-react";
import { Typography } from "@/components/atoms";

const benefits = [
  {
    title: "Ultra-Fast Processing",
    description:
      "Over 99% of withdrawals processed within 24 hours, based on verified 2025 internal performance data.",
    icon: Rocket,
  },
  {
    title: "Secure & Transparent",
    description:
      "Tier 1 banking and custody partners keep your funds protected at every stage.",
    icon: Shield,
  },
  {
    title: "Effortless Access",
    description:
      "Enjoy quick withdrawals with no hidden fees and a smooth, seamless process.",
    icon: Star,
  },
];

export const WithdrawalsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Subtitle */}
          <Typography
            as="p"
            variant="body"
            className="text-red-600 text-sm font-semibold uppercase tracking-wide"
          >
            Access your funds anytime, anywhere
          </Typography>

          {/* Title */}
          <Typography
            as="h2"
            variant="heading"
            className="text-black text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Seamless Withdrawals
          </Typography>

          {/* Banner */}
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src="/banner-withdraw-section.png"
              alt="Withdrawals Banner"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <Typography
                      as="h3"
                      variant="heading"
                      className="text-black text-lg font-bold mb-1"
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      as="p"
                      variant="body"
                      className="text-gray-700 text-sm"
                    >
                      {benefit.description}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
