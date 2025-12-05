import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { Typography } from "@/components/atoms";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/markets", label: "Our Markets" },
  { href: "/platforms", label: "Platforms" },
  { href: "/pricing", label: "Pricing" },
];

const supportLinks = [
  { href: "/help", label: "Help Center" },
  { href: "/faq", label: "FAQs" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

const companyLinks = [
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News & Updates" },
  { href: "/partners", label: "Partnerships" },
  { href: "/legal", label: "Legal Documents" },
];

const paymentMethods = [
  { name: "PayPal", src: "/paypal.png" },
  { name: "MasterCard", src: "/mastercard.png" },
  { name: "Skrill", src: "/skrill.png" },
  { name: "VISA", src: "/visa.png" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t-24 border-red-600">
      {/* Payment Methods */}
      <div className="border-b border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="relative w-20 h-12 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={method.src}
                  alt={method.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
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
            <Link href="/" className="inline-block">
              <div className="relative w-32 h-12">
                <Image
                  src="/logo-dark.png"
                  alt="Premier Markets"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Link>
            <Typography
              as="p"
              variant="body"
              className="text-gray-400 text-sm leading-relaxed"
            >
              CFDs are complex instruments and come with a high risk of losing
              money rapidly due to leverage. 21.38% of retail investor accounts
              generate profits when trading CFDs with this provider. You should
              consider whether you understand how CFDs work and whether you can
              afford to take the high risk of losing your money.
            </Typography>
            {/* Social Media Icons */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-red-600 transition-colors group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Typography
              as="h3"
              variant="heading"
              className="text-white text-sm font-bold mb-4"
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
              className="text-white text-sm font-bold mb-4"
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
              className="text-white text-sm font-bold mb-4"
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
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <Typography
            as="p"
            variant="body"
            className="text-gray-400 text-xs text-center leading-relaxed mb-4"
          >
            CFDs are complex instruments and come with a high risk of losing
            money rapidly due to leverage. 21.38% of retail investor accounts
            generate profits when trading CFDs with this provider. You should
            consider whether you understand how CFDs work and whether you can
            afford to take the high risk of losing your money.
          </Typography>
          <Typography
            as="p"
            variant="body"
            className="text-gray-400 text-xs text-center leading-relaxed mb-4"
          >
            Premier Markets Ltd, trading as Premier Markets is a company
            incorporated under company number: A000003075 in Anguilla. Our
            registered office is located at Anguilla, The Valley, Kismet House,
            Sandy Hill, PO Box P.O.Box 174 The information on this site is not
            directed at residents of Russia, Afghanistan, Belgium, Canada,
            India, United States or any country or jurisdiction where such
            distribution or use would be contrary to local law, sanctions or
            regulation.
          </Typography>
          <Typography
            as="p"
            variant="body"
            className="text-gray-400 text-xs text-center"
          >
            Copyright © 2025 Premier Markets - All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
