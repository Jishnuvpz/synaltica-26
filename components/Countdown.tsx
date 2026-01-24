
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-02-13T00:00:00') - +new Date();
    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTimeLeft, setPrevTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevTimeLeft(timeLeft);
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
        // @ts-ignore
        timeLeft[interval as keyof typeof timeLeft] = 0;
    }
    const currentValue = timeLeft[interval as keyof typeof timeLeft];
    const prevValue = prevTimeLeft[interval as keyof typeof timeLeft];
    const hasFlipped = currentValue !== prevValue;

    return (
      <div key={interval} className="relative group flex-shrink-0">
        {/* Expanding Ring on Hover */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-brand-amber/20 blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
        
        <div className="relative flex flex-col items-center justify-center glassmorphism rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 border-2 border-brand-purple group-hover:border-brand-amber transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(245,194,107,0.5)]">
          {/* Flip Animation */}
          <span className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-amber transition-all duration-300 ${
            hasFlipped ? 'animate-[flip_0.6s_ease-in-out]' : ''
          }`}>
            {currentValue.toString().padStart(2, '0')}
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm uppercase text-white/70 mt-0.5 sm:mt-1 group-hover:text-white transition-colors">{interval}</span>
        </div>
      </div>
    );
  });

  return (
    <section id="countdown" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-8 sm:mb-10 md:mb-12 animate-glow animate-[fadeInUp_0.6s_ease-out]">
          The Event Starts In
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8 max-w-full">
          {timerComponents}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
