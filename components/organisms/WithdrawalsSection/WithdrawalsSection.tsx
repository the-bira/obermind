import React from 'react';
import { Typography, Icon } from '@/components/atoms';

const benefits = [
  {
    title: 'Ultra-fast Processing',
    description: 'Get your funds quickly with our streamlined withdrawal process.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Secure & Transparent',
    description: 'Your transactions are protected with bank-level security.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Access',
    description: 'Multiple payment methods to suit your needs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
  },
];

export const WithdrawalsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Typography
              as="p"
              variant="body"
              className="text-red-600 text-sm font-semibold uppercase tracking-wide"
            >
              Access your funds anytime, anywhere
            </Typography>
            <Typography
              as="h2"
              variant="heading"
              className="text-black text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Seamless Withdrawals
            </Typography>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <Typography
                      as="h3"
                      variant="heading"
                      className="text-black text-lg font-bold mb-1"
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      as="p"
                      variant="body"
                      className="text-gray-700 text-sm"
                    >
                      {benefit.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            {/* Phone mockup placeholder */}
            <div className="relative w-64 h-[500px] bg-black rounded-[2.5rem] p-4 shadow-2xl">
              <div className="w-full h-full bg-gray-900 rounded-[2rem] flex flex-col p-6">
                <div className="bg-gray-800 rounded-lg h-32 mb-4"></div>
                <div className="space-y-3 flex-1">
                  <div className="bg-gray-800 rounded-lg h-12"></div>
                  <div className="bg-gray-800 rounded-lg h-12"></div>
                </div>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative gradient wave */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 to-transparent opacity-50 -z-10"></div>
    </section>
  );
};
