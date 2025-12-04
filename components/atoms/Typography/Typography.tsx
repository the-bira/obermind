import React from 'react';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a';
  variant?: 'heading' | 'body' | 'link';
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  as,
  variant = 'body',
  children,
  className = '',
  ...props
}) => {
  const defaultTag = variant === 'heading' ? 'h2' : variant === 'link' ? 'a' : 'p';

  const Component = as || defaultTag;

  const variantStyles = {
    heading: 'font-bold text-gray-900',
    body: 'text-gray-700',
    link: 'text-red-600 hover:text-red-700 underline cursor-pointer',
  };

  const headingStyles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl',
    h2: 'text-3xl md:text-4xl lg:text-5xl',
    h3: 'text-2xl md:text-3xl lg:text-4xl',
    h4: 'text-xl md:text-2xl lg:text-3xl',
    h5: 'text-lg md:text-xl lg:text-2xl',
    h6: 'text-base md:text-lg lg:text-xl',
  };

  const finalTag = as || defaultTag;
  const isHeading = finalTag.startsWith('h');
  const headingSize = isHeading ? headingStyles[finalTag as keyof typeof headingStyles] : '';

  return (
    <Component
      className={`${variantStyles[variant]} ${headingSize} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
