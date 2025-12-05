import React from 'react';

export interface TimeRangeButtonProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const TimeRangeButton: React.FC<TimeRangeButtonProps> = ({
  label,
  isSelected = false,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-[37px] h-[37px]
        rounded-[12px]
        p-[10px]
        text-xs font-semibold
        transition-all duration-200
        flex items-center justify-center
        ${className}
      `}
      style={
        isSelected
          ? {
              background: '#ED1D25',
              color: '#FFFFFF',
            }
          : {
              background: '#FFFFFF',
              color: '#000000',
              border: '1px solid #D7D7D7',
            }
      }
    >
      {label}
    </button>
  );
};

