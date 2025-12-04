import React from 'react';
import { Button, Typography } from '@/components/atoms';
import { StepCard } from '@/components/molecules';

const steps = [
  { number: 1, title: 'Register', description: 'Create your account in minutes' },
  { number: 2, title: 'Fund', description: 'Deposit funds securely' },
  { number: 3, title: 'Start Trading', description: 'Begin trading immediately' },
];

export const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              {steps.map((step) => (
                <StepCard
                  key={step.number}
                  stepNumber={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
            <div className="text-center lg:text-left space-y-4">
              <Typography
                as="p"
                variant="body"
                className="text-white text-lg leading-relaxed"
              >
                Start your trading journey today. Open an account and get access
                to over 17,000+ markets with 24/5 support.
              </Typography>
              <div className="flex justify-center lg:justify-start">
                <Button variant="white" size="lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            {/* Decorative phone image */}
            <div className="relative">
              <div className="w-64 h-[500px] bg-black rounded-[2.5rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-red-600 to-red-800 rounded-[2rem] relative overflow-hidden">
                  {/* Decorative coins falling */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute top-32 left-1/4 w-12 h-12 bg-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute top-48 right-1/4 w-10 h-10 bg-yellow-400 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
