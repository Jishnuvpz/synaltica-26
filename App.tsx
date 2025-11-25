
import React, { useState } from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Footer from './components/Footer';
import EventDetail from './components/EventDetail';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import { type Event } from './types';
import { EVENTS } from './constants';
import ParticleBackground from './components/ParticleBackground';
import SideNav from './components/SideNav';

const App: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetail = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="relative min-h-screen font-body low-poly-bg overflow-x-hidden">
      <div className="relative">
        <ParticleBackground />
        <Header onOpenNav={() => setIsNavOpen(true)} />
      </div>
      <main className="relative z-10">
        <Countdown />
        <Events events={EVENTS} onSelectEvent={handleSelectEvent} />
      </main>
      <Footer onContactClick={() => setIsContactOpen(true)} />
      <SideNav 
        isOpen={isNavOpen} 
        onClose={() => setIsNavOpen(false)}
        onContactClick={() => setIsContactOpen(true)}
        onAboutClick={() => setIsAboutOpen(true)}
      />
      {selectedEvent && (
        <EventDetail event={selectedEvent} onClose={handleCloseDetail} />
      )}
      {isContactOpen && (
        <ContactPage onClose={() => setIsContactOpen(false)} />
      )}
      {isAboutOpen && (
        <AboutPage onClose={() => setIsAboutOpen(false)} />
      )}
    </div>
  );
};

export default App;