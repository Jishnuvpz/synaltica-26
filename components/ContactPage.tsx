import React from 'react';

interface ContactProps {
  onClose: () => void;
}

const ContactPage: React.FC<ContactProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/95 backdrop-blur-md overflow-y-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 animate-[fadeIn_0.3s_ease-out]">
      <div className="relative w-full max-w-5xl my-auto animate-[fadeInUp_0.5s_ease-out]">
        <div className="glassmorphism rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-brand-amber/30 shadow-[0_0_40px_rgba(245,194,107,0.15)]">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-[fadeInUp_0.5s_ease-out_0.1s_both]">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide md:tracking-wider mb-3 animate-glow">
              Contact Us
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-brand-amber to-transparent mx-auto mb-3 sm:mb-4"></div>
            <p className="text-brand-amber/80 text-sm sm:text-base md:text-lg px-2">We're here to help with any questions about SYNALTICA '26</p>
          </div>

          {/* Main Contact Cards - Centered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 max-w-4xl mx-auto">
            {/* Student Coordinator 1 - Yeswanth */}
            <div className="relative group animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 sm:p-8 border-2 border-brand-amber/30 hover:border-brand-amber/60 transition-all duration-300 h-full flex flex-col">
                <div className="text-center flex-1">
                  <div className="inline-flex p-4 bg-brand-amber/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <p className="text-brand-amber text-xs font-semibold uppercase tracking-wide mb-2">Student Coordinator</p>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Yeswanth Raj S</h3>
                  <p className="text-brand-amber-dark text-sm mb-4">Department Chairman</p>
                </div>
                <div className="mt-auto pt-4 border-t border-brand-amber/20">
                  <a href="tel:+916380758380" className="inline-flex items-center gap-2 text-white/80 hover:text-brand-amber transition-colors group/phone">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/phone:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-mono text-sm sm:text-base">+91 6380758380</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Student Coordinator 2 - Vishnu */}
            <div className="relative group animate-[fadeInUp_0.5s_ease-out_0.3s_both]">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 sm:p-8 border-2 border-brand-amber/30 hover:border-brand-amber/60 transition-all duration-300 h-full flex flex-col">
                <div className="text-center flex-1">
                  <div className="inline-flex p-4 bg-brand-amber/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <p className="text-brand-amber text-xs font-semibold uppercase tracking-wide mb-2">Student Coordinator</p>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Vishnu Ram S</h3>
                  <p className="text-brand-amber-dark text-sm mb-4">Secretary</p>
                </div>
                <div className="mt-auto pt-4 border-t border-brand-amber/20">
                  <a href="tel:+919597757356" className="inline-flex items-center gap-2 text-white/80 hover:text-brand-amber transition-colors group/phone">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/phone:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-mono text-sm sm:text-base">+91 9597757356</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Student Coordinator 3 - Rudhresh */}
            <div className="relative group animate-[fadeInUp_0.5s_ease-out_0.4s_both]">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 sm:p-8 border-2 border-brand-amber/30 hover:border-brand-amber/60 transition-all duration-300 h-full flex flex-col">
                <div className="text-center flex-1">
                  <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-br from-brand-amber via-brand-amber/50 to-brand-burgundy/50">
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-brand-dark bg-brand-dark/50">
                        <img
                          src="/ORGANIZERS/STUDENT_COORDINATORS/JOIN_SECRETARY.jpeg"
                          alt="Rudhresh Raj Babu"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.parentElement?.classList.add('hidden');
                            // Fallback to showing SVG if image fails (by removing hidden class from sibling or alternative logic - simplified here to just hide)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-brand-amber text-xs font-semibold uppercase tracking-wide mb-2">Student Coordinator</p>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Rudhresh Raj Babu</h3>
                  <p className="text-brand-amber-dark text-sm mb-4">Joint Secretary</p>
                </div>
                <div className="mt-auto pt-4 border-t border-brand-amber/20">
                  <a href="tel:+919597243724" className="inline-flex items-center gap-2 text-white/80 hover:text-brand-amber transition-colors group/phone">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/phone:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-mono text-sm sm:text-base">+91 9597243724</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <div className="relative group animate-[fadeInUp_0.5s_ease-out_0.5s_both]">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-brand-amber/20 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-brand-amber text-xs font-semibold uppercase tracking-wide mb-2">Email Us</h3>
                  <a href="mailto:24127065@srcas.ac.in" className="text-white text-sm hover:text-brand-amber transition-colors break-all font-mono block">
                    24127065@srcas.ac.in
                  </a>
                  <p className="text-white/60 text-xs mt-2">For inquiries</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <a href="https://maps.app.goo.gl/4HCgrVSsKUJ5TSRu6" target="_blank" rel="noopener noreferrer" className="relative group block animate-[fadeInUp_0.5s_ease-out_0.6s_both]">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-brand-amber/20 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-brand-amber text-xs font-semibold uppercase tracking-wide mb-2">Venue</h3>
                  <p className="text-white text-base font-semibold group-hover:text-brand-amber transition-colors">
                    Sri Ramakrishna College
                  </p>
                  <p className="text-white/60 text-xs mt-1">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </a>

            {/* Event Date Card */}
            <div className="relative group animate-[fadeInUp_0.5s_ease-out_0.7s_both]">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-brand-amber/20 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-brand-amber text-xs font-semibold uppercase tracking-wide mb-2">Event Date</h3>
                  <p className="text-white text-base font-semibold">February 13, 2026</p>
                  <p className="text-white/60 text-xs mt-1">Mark your calendar!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Go Back Button */}
          <div className="mt-10 text-center animate-[fadeInUp_0.5s_ease-out_0.8s_both]">
            <button
              onClick={onClose}
              className="font-heading text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-brand-amber text-brand-dark rounded-lg transition-all duration-300 hover:bg-transparent hover:text-brand-amber border-2 border-brand-amber hover:shadow-[0_0_25px_rgba(245,194,107,0.6)] inline-flex items-center gap-3 font-bold hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
