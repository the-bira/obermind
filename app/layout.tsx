import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Premier Markets - Trade Forex, Stocks, Indices & More",
  description:
    "Trade over 17,000+ instruments including Forex, Stocks, Indices, Commodities, and Cryptocurrencies with Premier Markets. Competitive spreads, fast execution, and 24/5 support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
