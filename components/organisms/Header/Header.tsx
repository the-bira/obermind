'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/atoms";
import {
  TabSelector,
  TopBarLink,
  LanguageSelector,
  type Tab,
} from "@/components/molecules";

export interface TopBarLinkData {
  href: string;
  label: string;
}

export interface LanguageData {
  countryCode: string;
  language: string;
}

export interface HeaderProps {
  tabs?: Tab[];
  defaultTab?: string;
  topBarLinks?: TopBarLinkData[];
  language?: LanguageData;
}

const defaultTabs: Tab[] = [
  { id: "personal", label: "Personal" },
  { id: "institutional", label: "Institutional" },
];

const defaultTopBarLinks: TopBarLinkData[] = [
  { href: "/webtrader", label: "WebTrader" },
  { href: "/support", label: "Support" },
  { href: "/demo", label: "Open Demo" },
];

const defaultLanguage: LanguageData = {
  countryCode: "AE",
  language: "EN",
};

export const Header: React.FC<HeaderProps> = ({
  tabs = defaultTabs,
  defaultTab = "personal",
  topBarLinks = defaultTopBarLinks,
  language = defaultLanguage,
}) => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left Side - Personal/Institutional */}
            <TabSelector tabs={tabs} defaultTab={defaultTab} />

            {/* Right Side - Links, Language */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="h-4 w-px bg-gray-300" />
                {topBarLinks.map((link) => (
                  <TopBarLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    showDivider={true}
                  />
                ))}
              </div>

              {/* Language Selector */}
              <LanguageSelector
                countryCode={language.countryCode}
                language={language.language}
                className="ml-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <Image
                src="/Logo.png"
                alt="Premier Markets Logo"
                width={104}
                height={104}
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Navigation Items */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/trading"
              className="font-urbanist text-base font-normal text-black hover:text-red-600 transition-colors flex items-center gap-1"
              style={{
                fontFamily: "var(--font-urbanist)",
                fontSize: "16px",
                lineHeight: "100%",
              }}
            >
              Trading
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/discover"
              className="font-urbanist text-base font-normal text-black hover:text-red-600 transition-colors flex items-center gap-1"
              style={{
                fontFamily: "var(--font-urbanist)",
                fontSize: "16px",
                lineHeight: "100%",
              }}
            >
              Discover
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/promotions"
              className="font-urbanist text-base font-normal text-black hover:text-red-600 transition-colors flex items-center gap-1"
              style={{
                fontFamily: "var(--font-urbanist)",
                fontSize: "16px",
                lineHeight: "100%",
              }}
            >
              Promotions
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/company"
              className="font-urbanist text-base font-normal text-black hover:text-red-600 transition-colors flex items-center gap-1"
              style={{
                fontFamily: "var(--font-urbanist)",
                fontSize: "16px",
                lineHeight: "100%",
              }}
            >
              Company
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/partner"
              className="font-urbanist text-base font-normal text-red-600 hover:text-red-700 transition-colors flex items-center gap-1"
              style={{
                fontFamily: "var(--font-urbanist)",
                fontSize: "16px",
                lineHeight: "100%",
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