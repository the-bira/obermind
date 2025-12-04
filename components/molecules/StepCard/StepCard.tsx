import React from 'react';
import { Typography } from '@/components/atoms';

export interface StepCardProps {
  stepNumber: number;
  title: string;
  description?: string;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center text-center space-y-2 ${className}`}>
      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-2">
        {stepNumber}
      </div>
      <Typography
        as="h3"
        variant="heading"
        className="text-white text-xl font-bold"
      >
        {title}
      </Typography>
      {description && (
        <Typography as="p" variant="body" className="text-white text-sm opacity-90 max-w-xs">
          {description}
        </Typography>
      )}
    </div>
  );
};
