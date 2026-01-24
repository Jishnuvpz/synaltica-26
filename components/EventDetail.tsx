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

  const tabs = ['Overview', 'Rules', 'Rounds', 'Team Size'];

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
          <nav className="flex-shrink-0 border-b border-brand-purple/50 px-4 sm:px-6 md:px-8 animate-[fadeInUp_0.5s_ease-out_0.2s_both] overflow-x-auto">
            <div className="flex space-x-4 sm:space-x-6 md:space-x-8 min-w-max">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 font-heading text-base sm:text-lg transition-colors duration-200 animate-[fadeInUp_0.5s_ease-out_both] whitespace-nowrap ${activeTab === tab ? 'text-brand-amber border-b-2 border-brand-amber' : 'text-white/70 hover:text-white'
                    }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav>

          <div className="p-4 sm:p-6 md:p-8 flex-grow overflow-y-auto">
            {activeTab === 'Overview' && (
              <p className="text-white/90 leading-relaxed text-sm sm:text-base animate-[fadeInUp_0.5s_ease-out]">{event.overview}</p>
            )}

            {activeTab === 'Rules' && (
              <div className="animate-[fadeInUp_0.5s_ease-out]">
                {event.rules && event.rules.length > 0 ? (
                  <ul className="space-y-3">
                    {event.rules.map((rule, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-white/90 text-sm sm:text-base animate-[fadeInUp_0.5s_ease-out_both]"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-amber/20 border border-brand-amber flex items-center justify-center text-brand-amber text-xs font-bold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="flex-1 leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/60 italic text-sm sm:text-base">No specific rules provided</p>
                )}
              </div>
            )}

            {activeTab === 'Rounds' && (
              <div className="animate-[fadeInUp_0.5s_ease-out]">
                {event.rounds && event.rounds.length > 0 ? (
                  <div className="space-y-4">
                    {event.rounds.map((round, index) => (
                      <div
                        key={index}
                        className="border border-brand-purple/50 rounded-lg overflow-hidden animate-[fadeInUp_0.5s_ease-out_both]"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <button
                          onClick={() => handleToggleRound(index)}
                          className="w-full p-4 bg-brand-dark/30 hover:bg-brand-dark/50 transition-colors flex items-center justify-between gap-3"
                        >
                          <h3 className="font-heading text-base sm:text-lg text-brand-amber text-left flex-1">{round.title}</h3>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 text-brand-amber transition-transform duration-300 flex-shrink-0 ${openRound === index ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${openRound === index ? 'max-h-96' : 'max-h-0'}`}
                        >
                          <div className="p-4 bg-brand-dark/20">
                            <p className="text-white/90 leading-relaxed text-sm sm:text-base">{round.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-white/60 italic text-sm sm:text-base">No rounds information available</p>
                )}
              </div>
            )}

            {activeTab === 'Team Size' && (
              <div className="animate-[fadeInUp_0.5s_ease-out]">
                <div className="animate-[fadeInUp_0.5s_ease-out_0.1s_both]">
                  <h3 className="font-heading text-xl sm:text-2xl text-brand-amber-dark mb-2">Team Size</h3>
                  <p className="text-xl sm:text-2xl font-bold text-white">{event.teamSize}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <footer className="flex-shrink-0 p-4 sm:p-6 bg-brand-dark/50 border-t border-brand-purple/50 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-[fadeInUp_0.5s_ease-out_0.3s_both]">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 bg-brand-amber text-brand-dark rounded-lg transition-all duration-300 hover:bg-transparent hover:text-brand-amber border-2 border-brand-amber hover:shadow-[0_0_20px_theme(colors.brand.amber)] w-full sm:w-auto text-center"
          >
            Register Now
          </a>
          {event.whatsappLink && (
            <a
              href={event.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-brand-amber rounded-lg transition-all duration-300 hover:bg-brand-amber hover:text-brand-dark border-2 border-brand-amber hover:shadow-[0_0_20px_theme(colors.brand.amber)] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Join WhatsApp Group
            </a>
          )}
        </footer>
      </div>
    </div>
  );
};

export default EventDetail;