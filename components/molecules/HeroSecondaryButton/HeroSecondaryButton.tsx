import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface HeroSecondaryButtonProps {
  label: string;
  href: string;
  className?: string;
}

export const HeroSecondaryButton: React.FC<HeroSecondaryButtonProps> = ({
  label,
  href,
  className = '',
}) => {
  return (
    <Link
      href={href}
      className={`
        group
        inline-flex items-center justify-center gap-2 whitespace-nowrap
        h-[53px]
        bg-transparent border-2 border-white text-white
        rounded-[55px]
        px-[34px] py-[14px]
        font-urbanist font-bold text-base
        transition-all duration-300 ease-in-out
        hover:px-[44px] hover:gap-3 hover:bg-white hover:text-red-600
        active:px-[32px]
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800
        ${className}
      `}
      style={{ fontFamily: "var(--font-urbanist)" }}
    >
      <span>{label}</span>
      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
};
