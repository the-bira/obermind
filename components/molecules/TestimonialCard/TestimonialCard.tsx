import React from 'react';
import { Card, Typography, Icon } from '@/components/atoms';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  className = '',
}) => {
  return (
    <Card variant="outlined" className={`h-full ${className}`}>
      <div className="flex flex-col space-y-4">
        <div className="flex items-start">
          <Typography
            as="p"
            variant="body"
            className="text-gray-700 italic text-sm leading-relaxed"
          >
            &ldquo;{quote}&rdquo;
          </Typography>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <Typography
            as="p"
            variant="body"
            className="text-gray-900 font-semibold text-sm"
          >
            {author}
          </Typography>
          <Icon size="sm" className="text-red-600">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </Icon>
        </div>
      </div>
    </Card>
  );
};
