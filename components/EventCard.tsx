
import React from 'react';
import { type Event } from '../types';

interface EventCardProps {
  event: Event;
  onSelectEvent: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent }) => {
  const { name, tagline, Icon } = event;
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onClick={() => onSelectEvent(event)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card-glow-border rounded-xl p-4 sm:p-5 md:p-6 text-center glassmorphism cursor-pointer flex flex-col items-center justify-start group transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(245,194,107,0.3)] min-h-[260px] sm:min-h-[280px] active:scale-95"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(0)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 mb-3 sm:mb-4 rounded-full bg-brand-dark/50 flex items-center justify-center border-2 border-brand-amber-dark group-hover:border-brand-amber transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,194,107,0.6)]">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-brand-amber-dark group-hover:text-brand-amber transition-colors duration-300 group-hover:scale-110" />
      </div>
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-xs sm:text-sm text-white/70 font-light flex-grow px-2">{tagline}</p>
      <button className="relative mt-3 sm:mt-4 text-sm sm:text-base text-brand-amber font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden group-hover:scale-110 py-2 px-4">
        <span className="relative z-10">View Details &rarr;</span>
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </button>
    </div>
  );
};

export default EventCard;
