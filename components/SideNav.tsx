
import React from 'react';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
  onAboutClick: () => void;
  onHomeClick: () => void;
  onEventsClick: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose, onContactClick, onAboutClick, onHomeClick, onEventsClick }) => {
  const handleHomeClick = () => {
    onHomeClick();
    onClose();
  };

  const handleEventsClick = () => {
    onEventsClick();
    onClose();
    setTimeout(() => {
      // Prevent URL hash change
      history.pushState(null, '', window.location.pathname);
      const eventsSection = document.getElementById('events');
      if (eventsSection) {
        // Scroll with offset to show some context above
        const headerOffset = 100;
        const elementPosition = eventsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleContactClick = () => {
    onContactClick();
    onClose();
  };

  const handleAboutClick = () => {
    onAboutClick();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Side Navigation Panel */}
      <nav 
        className={`fixed top-0 right-0 h-full w-72 glassmorphism border-l-2 border-brand-purple/50 shadow-2xl z-50 p-8 transition-all duration-500 ease-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center mb-12 animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
          <h2 className="font-heading text-2xl text-brand-amber">Menu</h2>
          <button 
            onClick={onClose} 
            className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <ul className="space-y-6">
          <li className="animate-[fadeInUp_0.5s_ease-out_both]" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={handleHomeClick} 
              className="font-heading text-xl text-white/80 hover:text-brand-amber transition-colors duration-200 block text-left w-full"
            >
              Home
            </button>
          </li>
          <li className="animate-[fadeInUp_0.5s_ease-out_both]" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={handleEventsClick} 
              className="font-heading text-xl text-white/80 hover:text-brand-amber transition-colors duration-200 block text-left w-full"
            >
              Events
            </button>
          </li>
          <li className="animate-[fadeInUp_0.5s_ease-out_both]" style={{ animationDelay: '0.5s' }}>
            <button 
              onClick={handleAboutClick} 
              className="font-heading text-xl text-white/80 hover:text-brand-amber transition-colors duration-200 block text-left w-full"
            >
              About
            </button>
          </li>
          <li className="animate-[fadeInUp_0.5s_ease-out_both]" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={handleContactClick} 
              className="font-heading text-xl text-white/80 hover:text-brand-amber transition-colors duration-200 block text-left w-full"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideNav;