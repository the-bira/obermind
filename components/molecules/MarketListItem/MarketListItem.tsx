import React from 'react';
import Image from 'next/image';
import { Typography } from '@/components/atoms';

export interface MarketListItemProps {
  name: string;
  symbol: string;
  price: string;
  change: string;
  iconSrc: string;
  iconAlt: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const MarketListItem: React.FC<MarketListItemProps> = ({
  name,
  symbol,
  price,
  change,
  iconSrc,
  iconAlt,
  isSelected = false,
  onClick,
  className = '',
}) => {
  const isPositive = change.startsWith('+');
  const changeColor = isPositive ? 'text-green-600' : 'text-red-600';

  return (
    <div
      onClick={onClick}
      className={`
        w-[286px] h-[74px]
        rounded-[20px]
        p-4
        flex items-center justify-between
        cursor-pointer
        transition-all duration-200
        ${className}
      `}
      style={
        isSelected
          ? {
              background:
                'linear-gradient(126.89deg, #ED1D25 -17.29%, #871115 171.67%)',
              border: '1.7px solid transparent',
            }
          : {
              background: '#FFFFFF',
              border: '1px solid #D7D7D7',
            }
      }
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={iconSrc}
              alt={iconAlt}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
        <div>
          <Typography
            as="p"
            variant="body"
            className={`font-bold text-sm ${
              isSelected ? 'text-white' : 'text-black'
            }`}
          >
            {symbol} {name}
          </Typography>
        </div>
      </div>
      <div className="text-right">
        <Typography
          as="p"
          variant="body"
          className={`font-bold text-sm ${
            isSelected ? 'text-white' : 'text-black'
          }`}
        >
          {price}
        </Typography>
        <Typography
          as="p"
          variant="body"
          className={`text-xs font-semibold ${
            isSelected ? 'text-red-200' : changeColor
          }`}
        >
          {change}
        </Typography>
      </div>
    </div>
  );
};

