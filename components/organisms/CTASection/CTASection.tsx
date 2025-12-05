import React from 'react';
import Image from "next/image";

export const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-20 border-t-1 border-black">
      <div className="container mx-auto px-4">
        <div className="w-full rounded-lg overflow-hidden">
          <Image
            src="/cta-banner.png"
            alt="Get Started - Register, Fund, Start Trading"
            width={1200}
            height={400}
            className="w-full h-auto object-cover hover:scale-105 transition-all duration-300"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};
