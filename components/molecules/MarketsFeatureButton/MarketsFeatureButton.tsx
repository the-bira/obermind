import React from 'react';

export interface MarketsFeatureButtonProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export const MarketsFeatureButton: React.FC<MarketsFeatureButtonProps> = ({
  icon,
  text,
  className = '',
}) => {
  return (
    <div
      className={`
        inline-flex items-center gap-3
        bg-red-600 text-white
        rounded-full
        px-6 py-3
        font-semibold text-sm
        transition-all duration-200
        hover:bg-red-700
        ${className}
      `}
    >
      <div className="shrink-0">{icon}</div>
      <span>{text}</span>
    </div>
  );
};

