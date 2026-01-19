import React, { useState } from 'react';
import { type Event } from '../types';
import { REGISTRATION_URL } from '../constants';

interface EventDetailProps {
  event: Event;
  onClose: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, onClose }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openRound, setOpenRound] = useState<number | null>(0);
  
  const tabs = ['Overview', 'Rules', 'Team Size'];

  const handleToggleRound = (index: number) => {
    setOpenRound(openRound === index ? null : index);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4 animate-[fadeIn_0.3s_ease-out]" onClick={onClose}>
      <div
        className="relative max-w-4xl w-full h-[95vh] sm:h-[90vh] max-h-[800px] glassmorphism rounded-xl sm:rounded-2xl border-2 border-brand-purple flex flex-col overflow-hidden animate-[fadeInUp_0.5s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <header className="p-4 sm:p-6 md:p-8 border-b border-brand-purple/50 flex flex-col md:flex-row items-center gap-4 sm:gap-6 animate-[fadeInUp_0.5s_ease-out_0.1s_both]">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 rounded-full bg-brand-dark/50 flex items-center justify-center border-2 border-brand-amber animate-[scaleIn_0.5s_ease-out_0.2s_both]">
            <event.Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-brand-amber" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">{event.name}</h2>
            <p className="text-sm sm:text-base text-brand-amber-dark italic">{event.tagline}</p>
          </div>
        </header>

        <div className="flex flex-col flex-grow overflow-y-auto">
          <nav className="flex-shrink-0 border-b border-brand-purple/50 px-4 sm:px-6 md:px-8 animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
            <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 font-heading text-lg transition-colors duration-200 animate-[fadeInUp_0.5s_ease-out_both] ${
                    activeTab === tab ? 'text-brand-amber border-b-2 border-brand-amber' : 'text-white/70 hover:text-white'
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav>
          
          <div className="p-8 flex-grow">
            {activeTab === 'Overview' && <p className="text-white/90 leading-relaxed animate-[fadeInUp_0.5s_ease-out]">{event.overview}</p>}
            
            {activeTab === 'Rules' && (
              <div className="space-y-3">
                <h3 className="font-heading text-2xl text-brand-amber-dark mb-4 animate-[fadeInUp_0.5s_ease-out]">Event Rules</h3>
                {event.rounds.map((round, roundIndex) => (
                  <div key={roundIndex} className="space-y-3 animate-[fadeInUp_0.5s_ease-out_both]" style={{ animationDelay: `${roundIndex * 0.1}s` }}>
                    {event.rounds.length > 1 && (
                      <h4 className="font-heading text-xl font-semibold text-brand-amber mb-2">{round.title}</h4>
                    )}
                    <ul className="list-disc list-inside space-y-2 text-white/80">
                      {round.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="leading-relaxed">{rule}</li>
                      ))}
                    </ul>
                    {event.rounds.length > 1 && roundIndex < event.rounds.length - 1 && (
                      <div className="border-t border-brand-purple/30 my-4"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'Team Size' && (
              <div className="animate-[fadeInUp_0.5s_ease-out]">
                <div className="animate-[fadeInUp_0.5s_ease-out_0.1s_both]">
                  <h3 className="font-heading text-2xl text-brand-amber-dark mb-2">Team Size</h3>
                  <p className="text-2xl font-bold text-white">{event.teamSize}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <footer className="flex-shrink-0 p-6 bg-brand-dark/50 border-t border-brand-purple/50 flex items-center justify-center animate-[fadeInUp_0.5s_ease-out_0.3s_both]">
          <a 
            href={REGISTRATION_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-heading text-lg px-8 py-3 bg-brand-amber text-brand-dark rounded-lg transition-all duration-300 hover:bg-transparent hover:text-brand-amber border-2 border-brand-amber hover:shadow-[0_0_20px_theme(colors.brand.amber)]"
          >
            Register Now
          </a>
        </footer>
      </div>
    </div>
  );
};

export default EventDetail;