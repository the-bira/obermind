import React from 'react';
import { Headphones, Mail } from 'lucide-react';
import { Typography } from '@/components/atoms';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  iconType?: 'headphones' | 'mail';
  className?: string;
}

const getInitials = (name: string): string => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  iconType = 'mail',
  className = '',
}) => {
  const initials = getInitials(author);

  return (
    <div
      className={`
        relative
        rounded-[16px]
        p-px
        ${className}
      `}
      style={{
        width: '394px',
        height: '224px',
        background: 'linear-gradient(180deg, #FFC4C6 0%, #FFC8CA 100%)',
      }}
    >
      <div
        className="
          w-full h-full
          rounded-[16px]
          bg-white
          p-[30px]
          flex flex-col
        "
      >
        {/* Quote */}
        <div className="flex-1">
          <Typography
            as="p"
            variant="body"
            className="text-gray-700 italic text-sm leading-relaxed"
          >
            &ldquo;{quote}&rdquo;
          </Typography>
        </div>

        {/* Divider */}
        <div className="relative my-4">
          <div
            className="absolute inset-0 h-px"
            style={{
              background: 'linear-gradient(180deg, #FFC4C6 0%, #FFC8CA 100%)',
            }}
          />
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
              <span className="text-white font-semibold text-sm">
                {initials}
              </span>
            </div>
            {/* Name */}
            <Typography
              as="p"
              variant="body"
              className="text-gray-900 font-semibold text-sm"
            >
              {author}
            </Typography>
          </div>
          {/* Icon */}
          <div className="text-red-600">
            {iconType === 'headphones' ? (
              <Headphones className="w-5 h-5" />
            ) : (
              <Mail className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

