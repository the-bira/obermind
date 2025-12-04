import React from 'react';
import { Card, Typography } from '@/components/atoms';

export interface MarketCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const MarketCard: React.FC<MarketCardProps> = ({
  title,
  description,
  icon,
  className = '',
}) => {
  return (
    <Card
      variant="default"
      className={`text-white bg-gradient-to-br from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transition-all duration-300 cursor-pointer ${className}`}
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="p-3 bg-white bg-opacity-20 rounded-lg text-white">
          {icon}
        </div>
        <div>
          <Typography
            as="h3"
            variant="heading"
            className="text-white text-xl font-bold mb-2"
          >
            {title}
          </Typography>
          <Typography as="p" variant="body" className="text-white text-sm opacity-90">
            {description}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
