'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Globe, User } from 'lucide-react';
import { Button } from '@/components/atoms';

export const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'institutional'>('personal');

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left Side - Personal/Institutional */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveTab('personal')}
                className={`
                  font-urbanist text-sm font-semibold leading-[19.98px] tracking-[-0.2px]
                  transition-colors
                  ${activeTab === 'personal' 
                    ? 'text-red-600 border-b-2 border-red-600 pb-1' 
                    : 'text-black hover:text-red-600'
                  }
                `}
                style={{ fontFamily: 'var(--font-urbanist)' }}
              >
                Personal
              </button>
              <button
                onClick={() => setActiveTab('institutional')}
                className={`
                  font-urbanist text-sm font-semibold leading-[19.98px] tracking-[-0.2px]
                  transition-colors
                  ${activeTab === 'institutional' 
                    ? 'text-red-600 border-b-2 border-red-600 pb-1' 
                    : 'text-black hover:text-red-600'
                  }
                `}
                style={{ fontFamily: 'var(--font-urbanist)' }}
              >
                Institutional
              </button>
            </div>

            {/* Right Side - Links, Language */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="h-4 w-px bg-gray-300"></div>
                <Link
                  href="/webtrader"
                  className="font-urbanist text-sm font-semibold leading-[19.98px] tracking-[-0.2px] text-black hover:text-red-600 transition-colors"
                  style={{ fontFamily: 'var(--font-urbanist)' }}
                >
                  WebTrader
                </Link>
                <div className="h-4 w-px bg-gray-300"></div>
                <Link
                  href="/support"
                  className="font-urbanist text-sm font-semibold leading-[19.98px] tracking-[-0.2px] text-black hover:text-red-600 transition-colors"
                  style={{ fontFamily: 'var(--font-urbanist)' }}
                >
                  Support
                </Link>
                <div className="h-4 w-px bg-gray-300"></div>
                <Link
                  href="/demo"
                  className="font-urbanist text-sm font-semibold leading-[19.98px] tracking-[-0.2px] text-black hover:text-red-600 transition-colors"
                  style={{ fontFamily: 'var(--font-urbanist)' }}
                >
                  Open Demo
                </Link>
              </div>
              
              {/* Language Selector */}
              <div className="flex items-center gap-2 ml-4">
                <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white text-[10px] font-bold">
                  AE
                </div>
                <span 
                  className="font-urbanist text-sm font-semibold leading-[19.98px] tracking-[-0.2px] text-black"
                  style={{ fontFamily: 'var(--font-urbanist)' }}
                >
                  EN
                </span>
                <Globe className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex items-end">
              {/* Three wavy vertical bars in red */}
              <svg
                width="36"
                height="32"
                viewBox="0 0 36 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left bar - tallest, wavy ribbon */}
                <path
                  d="M3 2 Q4 6, 4.5 10 Q5 14, 5.5 18 Q6 22, 6.5 26 Q7 30, 7.5 32 L9.5 32 Q9 30, 8.5 26 Q8 22, 7.5 18 Q7 14, 6.5 10 Q6 6, 5 2 Z"
                  fill="#DC2626"
                />
                {/* Middle bar - medium height, wavy ribbon */}
                <path
                  d="M13 8 Q14 12, 14.5 16 Q15 20, 15.5 24 Q16 28, 16.5 32 L18.5 32 Q18 28, 17.5 24 Q17 20, 16.5 16 Q16 12, 15 8 Z"
                  fill="#DC2626"
                />
                {/* Right bar - shortest, wavy ribbon */}
                <path
                  d="M23 14 Q24 18, 24.5 22 Q25 26, 25.5 30 Q26 32, 26.5 32 L28.5 32 Q28 30, 27.5 26 Q27 22, 26.5 18 Q26 14, 25 14 Z"
                  fill="#DC2626"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span 
                className="text-black font-urbanist text-lg font-normal leading-none"
                style={{ 
                  fontFamily: 'var(--font-urbanist)',
                  fontSize: '16px',
                  lineHeight: '100%'
                }}
              >
                premier
              </span>
              <span 
                className="text-black font-urbanist text-lg font-normal leading-none"
                style={{ 
                  fontFamily: 'var(--font-urbanist)',
                  fontSize: '16px',
                  lineHeight: '100%'
                }}
              >
                markets
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/trading"
              className="font-urbanist text-base font-normal text-black hover:text-red-600 transition-colors flex items-center gap-1"
              style={{ 
                fontFamily: 'var(--font-urbanist)',
                fontSize: '16px',
                lineHeight: '100%'
              }}
            >
              Trading
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/discover"
              className="font-urbanist text-base font-normal text-black hover:text-red-600 transition-colors flex items-center gap-1"
              style={{ 
                fontFamily: 'var(--font-urbanist)',
                fontSize: '16px',
                lineHeight: '100%'
              }}
            >
              Discover
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/promotions"
              className="font-urbanist text-base font-normal text-black hover:text-red-600 transition-colors flex items-center gap-1"
              style={{ 
                fontFamily: 'var(--font-urbanist)',
                fontSize: '16px',
                lineHeight: '100%'
              }}
            >
              Promotions
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/company"
              className="font-urbanist text-base font-normal text-black hover:text-red-600 transition-colors flex items-center gap-1"
              style={{ 
                fontFamily: 'var(--font-urbanist)',
                fontSize: '16px',
                lineHeight: '100%'
              }}
            >
              Company
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/partner"
              className="font-urbanist text-base font-normal text-red-600 hover:text-red-700 transition-colors flex items-center gap-1"
              style={{ 
                fontFamily: 'var(--font-urbanist)',
                fontSize: '16px',
                lineHeight: '100%'
              }}
            >
              Partner with us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button variant="primary" size="md" className="hidden lg:block">
              Register
            </Button>
            
            {/* Two circular icons */}
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition-colors">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-red-600 transition-colors">
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};