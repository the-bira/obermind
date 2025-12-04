import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/atoms';

export interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  children,
  active = false,
  className = '',
}) => {
  return (
    <Link
      href={href}
      className={`
        relative px-4 py-2 text-sm font-medium transition-colors duration-200
        ${active ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}
        ${className}
      `}
    >
      <Typography as="span" variant="body">
        {children}
      </Typography>
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
      )}
    </Link>
  );
};
