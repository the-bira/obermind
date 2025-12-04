import React from 'react';
import Link from 'next/link';
import { Button, Typography } from '@/components/atoms';
import { NavigationItem } from '@/components/molecules';

const topLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
];

const mainNavItems = [
  { href: '/trading', label: 'Trading' },
  { href: '/markets', label: 'Markets' },
  { href: '/platforms', label: 'Platforms' },
  { href: '/partners', label: 'Partners' },
  { href: '/education', label: 'Education' },
  { href: '/company', label: 'Company' },
];

export const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs">
            <div className="flex gap-6">
              {topLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-red-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-6 items-center">
              <Link
                href="/chat"
                className="hover:text-red-500 transition-colors flex items-center gap-1"
              >
                <span>💬</span>
                <span>Live Chat</span>
              </Link>
              <Link
                href="/login"
                className="hover:text-red-500 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hover:text-red-500 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <Typography as="span" className="text-white font-bold text-xl">
                P
              </Typography>
            </div>
            <Typography
              as="span"
              variant="heading"
              className="text-black text-xl font-bold"
            >
              premier markets
            </Typography>
          </Link>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center gap-2">
            {mainNavItems.map((item) => (
              <NavigationItem key={item.href} href={item.href}>
                {item.label}
              </NavigationItem>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="md">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
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
    </header>
  );
};
