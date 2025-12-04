import React from 'react';
import Image from 'next/image';

export interface FinancialCardData {
  icon: string; // caminho para a imagem do ícone (ex: /usd-eur.png)
  pair: string; // ex: "USD/EUR"
  value: string; // ex: "0.00014"
  change: string; // ex: "-234.45"
  trend: 'up' | 'down'; // determina qual gráfico usar
}

export interface FinancialCardProps {
  data: FinancialCardData;
  className?: string;
}

export const FinancialCard: React.FC<FinancialCardProps> = ({
  data,
  className = '',
}) => {
  const graphIcon = data.trend === 'up' ? '/Vector-green.svg' : '/Vector-red.svg';
  const changeColor = data.trend === 'up' ? 'text-green-600' : 'text-red-600';

  return (
    <div
      className={`
        flex flex-col items-center justify-center
        rounded-full
        bg-white
        p-6
        shadow-md
        hover:shadow-lg
        transition-shadow duration-300
        ${className}
      `}
    >
      {/* Icon */}
      <div className="mb-3">
        <Image
          src={data.icon}
          alt={data.pair}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>

      {/* Pair Name */}
      <p
        className="mb-2 font-bold text-sm leading-none"
        style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
          fontWeight: 700,
        }}
      >
        {data.pair}
      </p>

      {/* Graph */}
      <div className="mb-2">
        <Image
          src={graphIcon}
          alt={data.trend === 'up' ? 'Trending up' : 'Trending down'}
          width={39}
          height={18}
          className="object-contain"
        />
      </div>

      {/* Value */}
      <p
        className="mb-1 font-bold text-xs text-gray-800"
        style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontWeight: 700,
        }}
      >
        {data.value}
      </p>

      {/* Change */}
      <p
        className={`font-bold text-xs ${changeColor}`}
        style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
          fontWeight: 700,
        }}
      >
        {data.change}
      </p>
    </div>
  );
};
