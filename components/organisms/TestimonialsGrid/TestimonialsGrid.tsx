import React from 'react';
import { Typography } from '@/components/atoms';
import { TestimonialCard } from '@/components/molecules';

const testimonials = [
  {
    quote:
      'Premier Markets has transformed my trading experience. The platform is intuitive and the support is exceptional.',
    author: 'Adam Walker',
  },
  {
    quote:
      'The spreads are competitive and execution is fast. I highly recommend Premier Markets to any serious trader.',
    author: 'Jason Warner',
  },
  {
    quote:
      'Best trading platform I have used. The educational resources are comprehensive and very helpful.',
    author: 'David Jones',
  },
  {
    quote:
      'Outstanding customer service and a wide range of markets. Premier Markets is my go-to broker.',
    author: 'Sarah Mitchell',
  },
  {
    quote:
      'The mobile app is fantastic. I can trade anywhere, anytime. Excellent experience overall.',
    author: 'Michael Brown',
  },
  {
    quote:
      'Reliable platform with transparent pricing. Withdrawals are processed quickly without any issues.',
    author: 'Emily Davis',
  },
  {
    quote:
      'Great selection of instruments and powerful trading tools. Perfect for both beginners and professionals.',
    author: 'James Wilson',
  },
  {
    quote:
      'I appreciate the educational content and market analysis. It helps me make better trading decisions.',
    author: 'Lisa Anderson',
  },
  {
    quote:
      'Premier Markets offers everything I need for successful trading. Highly satisfied with the service.',
    author: 'Robert Taylor',
  },
];

export const TestimonialsGrid: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Typography
            as="h2"
            variant="heading"
            className="text-black text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            What{' '}
            <span className="text-red-600">Premier</span> Traders are saying
            about us
          </Typography>
          <Typography
            as="p"
            variant="body"
            className="text-gray-700 text-lg max-w-2xl mx-auto"
          >
            Read what our community of traders has to say about their experience
            with Premier Markets.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
