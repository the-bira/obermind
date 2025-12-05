import React from 'react';
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Typography } from "@/components/atoms";

export interface MarketCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  className?: string;
}

export const MarketCard: React.FC<MarketCardProps> = ({
  title,
  description,
  iconSrc,
  iconAlt,
  className = "",
}) => {
  return (
    <div
      className={`
        relative
        rounded-[40px]
        p-[2px]
        transition-all duration-300
        cursor-pointer
        group
        hover:-translate-y-2
        hover:shadow-[0_10px_40px_rgba(237,29,37,0.3)]
        ${className}
      `}
      style={{
        background: "linear-gradient(180deg, #FFE6E7 0%, #ED1D25 62.02%)",
      }}
    >
      <div
        className="
          w-full h-full
          bg-white
          rounded-[40px]
          p-6
          flex flex-col space-y-4
        "
      >
        {/* Icon */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0">
          <div className="relative w-full h-full">
            <Image
              src={iconSrc}
              alt={iconAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <Typography
          as="h3"
          variant="heading"
          className="text-black text-xl font-bold"
        >
          {title}
        </Typography>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Description */}
        <Typography as="p" variant="body" className="text-gray-700 text-sm">
          {description}
        </Typography>

        {/* Arrow Button */}
        <div className="flex justify-start mt-auto pt-2">
          <button
            className="
              w-10 h-10
              rounded-full
              bg-gray-100
              flex items-center justify-center
              transition-all duration-300
              group-hover:bg-red-600
            "
            aria-label={`View ${title}`}
          >
            <ArrowUpRight
              className="
                w-5 h-5
                text-gray-600
                transition-colors duration-300
                group-hover:text-white
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
};
