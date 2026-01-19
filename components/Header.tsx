import React from 'react';
import { REGISTRATION_URL } from '../constants';

interface HeaderProps {
  onOpenNav: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenNav }) => {
  const [buttonPosition, setButtonPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 15;
    const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 15;
    setButtonPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setButtonPosition({ x: 0, y: 0 });
  };

  return (
    <header className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
      {/* Fixed Hamburger Menu */}
      <button 
        onClick={onOpenNav} 
        className="fixed top-4 right-4 md:top-8 md:right-8 z-30 p-2.5 rounded-lg backdrop-blur-sm bg-brand-dark/30 border border-brand-amber/30 text-brand-amber/70 hover:text-brand-amber hover:border-brand-amber/60 transition-all duration-300 hover:bg-brand-dark/50"
        aria-label="Open navigation menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Logos Row - Above Title */}
      <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-20 mb-8 md:mb-12 lg:mb-16">
        {/* Event Logo */}
        <div className="group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-amber/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-brand-purple/30 to-brand-burgundy/30 backdrop-blur-md border-2 border-brand-amber/40 rounded-xl p-3 transition-all duration-300 group-hover:border-brand-amber/80 group-hover:scale-105 overflow-hidden">
              <img 
                src="/assets/logos/eventlogo.png" 
                alt="SYNALTICA Event Logo" 
                className="h-[50px] md:h-[60px] lg:h-[80px] w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
            </div>
          </div>
        </div>

        {/* College Logo */}
        <div className="group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-amber/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-brand-purple/30 to-brand-burgundy/30 backdrop-blur-md border-2 border-brand-amber/40 rounded-xl p-3 transition-all duration-300 group-hover:border-brand-amber/80 group-hover:scale-105 overflow-hidden">
              <img 
                src="/assets/logos/collegelogo.png" 
                alt="Sri Ramakrishna College" 
                className="h-[50px] md:h-[60px] lg:h-[80px] w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
            </div>
          </div>
        </div>

        {/* Department Logo */}
        <div className="group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-amber/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-brand-purple/30 to-brand-burgundy/30 backdrop-blur-md border-2 border-brand-amber/40 rounded-xl p-3 transition-all duration-300 group-hover:border-brand-amber/80 group-hover:scale-105 overflow-hidden">
              <img 
                src="/assets/logos/departmentlogo.png" 
                alt="Department of CS with Data Analytics" 
                className="h-[50px] md:h-[60px] lg:h-[80px] w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-6xl">
        {/* Main Title */}
        <div className="relative mb-4 md:mb-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight sm:tracking-normal md:tracking-wide lg:tracking-wider animate-glow max-w-full overflow-hidden text-ellipsis">
            SYNALTICA '26
          </h1>
        </div>

        {/* Decorative Line */}
        <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-brand-amber to-transparent mb-4 md:mb-8"></div>

        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 font-light tracking-wide max-w-3xl leading-relaxed mb-2 md:mb-3 px-4">
          Presented by Department of Computer Science with Data Analytics
        </p>
        
        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-brand-amber/20 to-brand-burgundy/20 backdrop-blur-sm border border-brand-amber/40 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-heading text-base md:text-lg lg:text-xl text-brand-amber font-semibold">February 13, 2026</span>
        </div>

        {/* CTA Button with Magnetic & Shimmer Effect */}
        <a 
          href={REGISTRATION_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative font-heading text-lg md:text-xl px-12 py-4 bg-brand-amber text-brand-dark rounded-xl font-bold transition-all duration-300 hover:bg-transparent hover:text-brand-amber border-2 border-brand-amber hover:shadow-[0_0_30px_rgba(245,194,107,0.6)] overflow-hidden shimmer-effect"
          style={{
            transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <span className="relative z-10">Register Now</span>
          {/* Liquid Button Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-amber to-brand-amber-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl scale-0 group-hover:scale-150"></div>
          {/* Shimmer Overlay */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </a>
      </div>
    </header>
  );
};

export default Header;