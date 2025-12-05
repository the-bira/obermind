import React from 'react';
import Image from 'next/image';

export interface MarketsFeatureButtonProps {
  iconSrc: string;
  iconAlt: string;
  text: string;
  className?: string;
}

export const MarketsFeatureButton: React.FC<MarketsFeatureButtonProps> = ({
  iconSrc,
  iconAlt,
  text,
  className = '',
}) => {
  return (
    <div
      className={`
        relative inline-flex items-center gap-3
        rounded-full
        p-px
        transition-all duration-200
        ${className}
      `}
      style={{
        background: 'linear-gradient(90deg, #ED1D25 0%, #FF9595 100%)',
      }}
    >
      <div
        className="
          w-full h-full rounded-full
          flex items-center gap-3
          px-6 py-3
          font-semibold text-sm text-white
        "
        style={{
          background: 'linear-gradient(90deg, #900003 0%, #730307 100%)',
        }}
      >
        <div className="shrink-0 relative w-5 h-5">
          <Image
            src={iconSrc}
            alt={iconAlt}
            fill
            className="object-contain"
          />
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
};

