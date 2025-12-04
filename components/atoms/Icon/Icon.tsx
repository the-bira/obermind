import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Icon: React.FC<IconProps> = ({
  name,
  children,
  size = 'md',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  if (children) {
    return (
      <svg
        className={`${sizeStyles[size]} ${className}`}
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        {children}
      </svg>
    );
  }

  return (
    <svg
      className={`${sizeStyles[size]} ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
      aria-label={name}
    >
      {children}
    </svg>
  );
};
