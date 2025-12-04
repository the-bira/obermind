import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/atoms';

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/markets', label: 'Markets' },
  { href: '/platforms', label: 'Platforms' },
  { href: '/partners', label: 'Partners' },
  { href: '/education', label: 'Education' },
  { href: '/news', label: 'News' },
];

const supportLinks = [
  { href: '/help', label: 'Help Center' },
  { href: '/faq', label: 'FAQ' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
];

const companyLinks = [
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/legal', label: 'Legal Documents' },
];

const paymentMethods = ['PayPal', 'Skrill', 'Neteller', 'Pay', 'VISA'];
const socialLinks = [
  { name: 'Facebook', icon: '📘' },
  { name: 'LinkedIn', icon: '💼' },
  { name: 'YouTube', icon: '📺' },
  { name: 'Instagram', icon: '📷' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      {/* Payment Methods */}
      <div className="border-b border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="text-gray-400 text-sm font-semibold hover:text-white transition-colors cursor-pointer"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <Typography as="span" className="text-white font-bold text-xl">
                  P
                </Typography>
              </div>
              <Typography
                as="span"
                variant="heading"
                className="text-white text-xl font-bold"
              >
                premier markets
              </Typography>
            </Link>
            <Typography
              as="p"
              variant="body"
              className="text-gray-400 text-sm leading-relaxed"
            >
              Premier Markets is a leading online trading provider, offering
              access to a wide range of financial instruments with competitive
              spreads and exceptional service.
            </Typography>
          </div>

          {/* Quick Links */}
          <div>
            <Typography
              as="h3"
              variant="heading"
              className="text-white text-lg font-bold mb-4"
            >
              Quick Links
            </Typography>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <Typography
              as="h3"
              variant="heading"
              className="text-white text-lg font-bold mb-4"
            >
              Support
            </Typography>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <Typography
              as="h3"
              variant="heading"
              className="text-white text-lg font-bold mb-4"
            >
              Company
            </Typography>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={`/${social.name.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <Typography
            as="p"
            variant="body"
            className="text-gray-500 text-xs text-center leading-relaxed"
          >
            Premier Markets is operated by Premier Markets LLC and is registered
            in St. Vincent and the Grenadines. Trading involves substantial risk
            of loss and is not suitable for every investor. Please ensure you
            fully understand the risks involved.
          </Typography>
          <Typography
            as="p"
            variant="body"
            className="text-gray-500 text-xs text-center mt-4"
          >
            Copyright © 2023 Premier Markets. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
