'use client';

import React, { useState } from 'react';

export interface Tab {
  id: string;
  label: string;
}

export interface TabSelectorProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  defaultTab,
  onTabChange,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id || '');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`
            font-urbanist text-sm font-semibold leading-[19.98px] tracking-[-0.2px]
            transition-colors
            ${
              activeTab === tab.id
                ? 'text-red-600 border-b-2 border-red-600 pb-1'
                : 'text-black hover:text-red-600'
            }
          `}
          style={{ fontFamily: 'var(--font-urbanist)' }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
