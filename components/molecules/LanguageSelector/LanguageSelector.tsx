import React from 'react';
import { Globe } from 'lucide-react';

export interface LanguageSelectorProps {
  countryCode: string;
  language: string;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  countryCode,
  language,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white text-[10px] font-bold">
        {countryCode}
      </div>
      <span
        className="font-urbanist text-sm font-semibold leading-[19.98px] tracking-[-0.2px] text-black"
        style={{ fontFamily: 'var(--font-urbanist)' }}
      >
        {language}
      </span>
      <Globe className="w-4 h-4 text-gray-500" />
    </div>
  );
};
