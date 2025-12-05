import React from 'react';
import Image from "next/image";
import { Typography } from "@/components/atoms";

export const WithdrawalsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center gap-2 flex flex-col items-center justify-center">
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
          </div>
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
        </div>
      </div>
    </section>
  );
};
