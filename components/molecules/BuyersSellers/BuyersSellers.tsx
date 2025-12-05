import React from 'react';

export interface BuyersSellersProps {
  buyersPercent: string;
  sellersPercent: string;
  low: string;
  high: string;
  className?: string;
}

export const BuyersSellers: React.FC<BuyersSellersProps> = ({
  buyersPercent,
  sellersPercent,
  low,
  high,
  className = '',
}) => {
  return (
    <div
      className={`
        w-[186px] h-[66px]
        rounded-[20px]
        p-4
        flex flex-col justify-between
        ${className}
      `}
      style={{
        background: '#FFFFFF',
        border: '1px solid #D7D7D7',
      }}
    >
      <div className="flex items-center justify-between">
        <span
          style={{
            fontFamily: 'var(--font-urbanist), Arial, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: '10px',
            lineHeight: '125%',
            letterSpacing: '0px',
            color: '#000000',
          }}
        >
          Buyers
        </span>
        <span
          style={{
            fontFamily: 'var(--font-urbanist), Arial, Helvetica, sans-serif',
            fontWeight: 700,
            fontSize: '10px',
            lineHeight: '125%',
            letterSpacing: '0px',
            color: '#000000',
          }}
        >
          {buyersPercent}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-urbanist), Arial, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: '10px',
            lineHeight: '125%',
            letterSpacing: '0px',
            color: '#54C764',
          }}
        >
          Low: {low}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span
          style={{
            fontFamily: 'var(--font-urbanist), Arial, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: '10px',
            lineHeight: '125%',
            letterSpacing: '0px',
            color: '#000000',
          }}
        >
          Seller
        </span>
        <span
          style={{
            fontFamily: 'var(--font-urbanist), Arial, Helvetica, sans-serif',
            fontWeight: 700,
            fontSize: '10px',
            lineHeight: '125%',
            letterSpacing: '0px',
            color: '#000000',
          }}
        >
          {sellersPercent}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-urbanist), Arial, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: '10px',
            lineHeight: '125%',
            letterSpacing: '0px',
            color: '#E74947',
          }}
        >
          High: {high}
        </span>
      </div>
    </div>
  );
};

