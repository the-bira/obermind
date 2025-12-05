import React from 'react';
import { Typography } from '@/components/atoms';
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Premier Markets has transformed my trading experience. The platform is intuitive and the support is exceptional.",
    author: "Adam Keller",
    iconType: "headphones" as const,
  },
  {
    quote:
      "The spreads are competitive and execution is fast. I highly recommend Premier Markets to any serious trader.",
    author: "Lucas Vermeer",
    iconType: "headphones" as const,
  },
  {
    quote:
      "Best trading platform I have used. The educational resources are comprehensive and very helpful.",
    author: "David Lorens",
    iconType: "mail" as const,
  },
  {
    quote:
      "Outstanding customer service and a wide range of markets. Premier Markets is my go-to broker.",
    author: "Marco Lazzari",
    iconType: "headphones" as const,
  },
  {
    quote:
      "The mobile app is fantastic. I can trade anywhere, anytime. Excellent experience overall.",
    author: "Petar Ilic",
    iconType: "mail" as const,
  },
  {
    quote:
      "Reliable platform with transparent pricing. Withdrawals are processed quickly without any issues.",
    author: "Mark 'Clips' Renard",
    iconType: "mail" as const,
  },
];

export const TestimonialsGrid: React.FC = () => {
  return (
    <section className="bg-white py-20 relative">
      {/* Gradient background */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/3 -left-[16.67%] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 196, 198, 0.3) 0%, transparent 70%)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <Typography
            as="h2"
            variant="heading"
            className="text-black text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            What <span className="text-red-600">Premier</span> Traders are
            saying about us
          </Typography>
          <Typography
            as="p"
            variant="body"
            className="text-gray-700 text-lg max-w-2xl mx-auto"
          >
            Join a growing community of professionals who rely on our platform
            to trade smarter every day.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              iconType={testimonial.iconType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
