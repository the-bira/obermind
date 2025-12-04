import React from 'react';
import Link from 'next/link';

export interface TopBarLinkProps {
  href: string;
  label: string;
  showDivider?: boolean;
  className?: string;
}

export const TopBarLink: React.FC<TopBarLinkProps> = ({
  href,
  label,
  showDivider = true,
  className = '',
}) => {
  return (
    <>
      {showDivider && <div className="h-4 w-px bg-gray-300" />}
      <Link
        href={href}
        className={`
          font-urbanist text-sm font-semibold leading-[19.98px] tracking-[-0.2px]
          text-black hover:text-red-600 transition-colors
          ${className}
        `}
        style={{ fontFamily: 'var(--font-urbanist)' }}
      >
        {label}
      </Link>
    </>
  );
};
