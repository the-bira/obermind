import React from 'react';
import { Typography } from '@/components/atoms';

export interface PriceDisplayProps {
  price: string | number;
  change?: string | number;
  changePercent?: string | number;
  className?: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  change,
  changePercent,
  className = '',
}) => {
  const formatPrice = (value: string | number) => {
    if (typeof value === 'string') return value;
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const isPositive = changePercent
    ? parseFloat(changePercent.toString()) >= 0
    : change
      ? parseFloat(change.toString()) >= 0
      : true;

  const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
  const changeSign = isPositive ? '+' : '';

  return (
    <div className={`flex flex-col ${className}`}>
      <Typography
        as="span"
        variant="body"
        className="text-gray-900 font-bold text-lg"
      >
        {formatPrice(price)}
      </Typography>
      {(change !== undefined || changePercent !== undefined) && (
        <div className={`flex items-center gap-2 ${changeColor}`}>
          {change !== undefined && (
            <Typography as="span" variant="body" className={`text-sm font-semibold ${changeColor}`}>
              {changeSign}
              {formatPrice(change)}
            </Typography>
          )}
          {changePercent !== undefined && (
            <Typography as="span" variant="body" className={`text-sm font-semibold ${changeColor}`}>
              ({changeSign}
              {formatPrice(changePercent)}%)
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};
