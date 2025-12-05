import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/components/atoms';

export const NewsSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-2">
            <Typography
              as="p"
              variant="body"
              className="text-red-600 text-sm font-semibold uppercase tracking-wide"
            >
              Daily Updates
            </Typography>
            <Typography
              as="h2"
              variant="heading"
              className="text-black text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Everything you need to trade the markets
            </Typography>
          </div>
          <Link
            href="/news"
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            View all &gt;
          </Link>
        </div>

        {/* Top Section: News Card (1/3) + Video Player (2/3) */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* News Card - 1/3 */}
          <div
            className="
              bg-white
              rounded-[20px]
              overflow-hidden
              cursor-pointer
              transition-shadow duration-300
              shrink-0
            "
            style={{
              width: "276px",
              height: "455px",
              boxShadow: `
                0px 2.77px 2.21px 0px rgba(0, 0, 0, 0.02),
                0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03),
                0px 12.52px 10.02px 0px rgba(0, 0, 0, 0.04),
                0px 22.34px 17.87px 0px rgba(0, 0, 0, 0.04),
                0px 41.78px 33.42px 0px rgba(0, 0, 0, 0.05),
                0px 100px 80px 0px rgba(0, 0, 0, 0.07)
              `,
            }}
          >
            <div className="relative w-full h-64">
              <Image
                src="/news-section-card-cover.png"
                alt="Gulf markets news"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-6">
              <p
                style={{
                  fontFamily: "Urbanist, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "0.2px",
                  color: "#737373",
                  marginBottom: "12px",
                }}
              >
                03 October 2025
              </p>
              <Typography
                as="h3"
                variant="heading"
                style={{
                  fontFamily: "Gilroy-Bold, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  color: "#252B42",
                  marginBottom: "12px",
                }}
              >
                Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears
              </Typography>
              <Link
                href="/news/gulf-markets"
                className="text-red-600 hover:text-red-700 font-semibold text-sm"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Video Player - 2/3 */}
          <div className="flex-1 relative rounded-[20px] overflow-hidden">
            <div className="relative w-full h-[455px]">
              <Image
                src="/news-section-play-video-cover.png"
                alt="Trade CFDs with Premier Markets"
                fill
                className="object-cover"
                unoptimized
              />
              {/* Play Button - Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="
                    w-20 h-20
                    bg-red-600
                    rounded-full
                    flex items-center justify-center
                    transition-all duration-300
                    hover:bg-red-700
                    hover:scale-110
                    shadow-lg
                  "
                  aria-label="Play video"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-10 h-10 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="w-full rounded-[20px] overflow-hidden mt-6">
          <div className="relative w-full h-[455px]">
            <Image
              src="/news-section-banner.png"
              alt="Premier Markets - Market Cap Weighted PR (BKP)"
              fill
              className="object-cover rounded-[20px]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};
