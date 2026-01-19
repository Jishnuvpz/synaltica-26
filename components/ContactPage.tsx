import React from 'react';

interface ContactProps {
  onClose: () => void;
}

const ContactPage: React.FC<ContactProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/95 backdrop-blur-md overflow-y-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 animate-[fadeIn_0.3s_ease-out]">
      <div className="relative w-full max-w-6xl my-auto animate-[fadeInUp_0.5s_ease-out]">
        <div className="glassmorphism rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-brand-amber/30 shadow-[0_0_40px_rgba(245,194,107,0.15)]">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12 animate-[fadeInUp_0.5s_ease-out_0.1s_both]">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide md:tracking-wider mb-3 animate-glow">
              Contact Us
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-brand-amber to-transparent mx-auto mb-3 sm:mb-4"></div>
            <p className="text-brand-amber/80 text-sm sm:text-base md:text-lg px-2">We're here to help with any Questions about SYNALTICA '26</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Staff Coordinators */}
            <div className="space-y-6">
              {[
                'Dr.M.Praneesh',
                'Dr.A.Senthil Kumar',
                'Dr.Ginne M James',
                'Dr.Tintu George',
                'Dr.K.Rathi',
                'Ms.M.Aswathi',
              ].map((name) => (
                <div key={name} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full flex flex-col">
                    <div className="text-center mb-4">
                      <div className="inline-flex p-3 bg-brand-amber/20 rounded-lg mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-brand-amber text-xs font-semibold uppercase tracking-wide mb-2">Staff Coordinator</p>
                      <h3 className="text-white text-xl font-bold mb-1">{name}</h3>
                      <p className="text-brand-amber-dark text-sm mb-3">Faculty</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Student Coordinator 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className="inline-flex p-3 bg-brand-amber/20 rounded-lg mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <p className="text-brand-amber text-xs font-semibold uppercase tracking-wide mb-2">Student Coordinator</p>
                  <h3 className="text-white text-xl font-bold mb-1">Yeswanth Raj S</h3>
                  <p className="text-brand-amber-dark text-sm mb-3">Department Chairman</p>
                </div>
                <div className="mt-auto text-center">
                  <a href="tel:+916380758380" className="inline-flex items-center gap-2 text-white/80 hover:text-brand-amber transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-mono text-base">+91 6380758380</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Student Coordinator 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className="inline-flex p-3 bg-brand-amber/20 rounded-lg mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <p className="text-brand-amber text-xs font-semibold uppercase tracking-wide mb-2">Student Coordinator</p>
                  <h3 className="text-white text-xl font-bold mb-1">Vishnu Ram</h3>
                  <p className="text-brand-amber-dark text-sm mb-3">Secretary</p>
                </div>
                <div className="mt-auto text-center">
                  <a href="tel:+9597757356" className="inline-flex items-center gap-2 text-white/80 hover:text-brand-amber transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-mono text-base">+91 9597757356</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email & Help Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Email Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-8 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full flex flex-col">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-brand-amber/20 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-2">Email Us</h3>
                  <a href="mailto:24127065@srcas.ac.in" className="text-white text-lg hover:text-brand-amber transition-colors break-all font-mono">
                    24127065@srcas.ac.in
                  </a>
                  <p className="text-white/60 text-sm mt-2">For inquiries and information</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <a href="https://maps.app.goo.gl/4HCgrVSsKUJ5TSRu6" target="_blank" rel="noopener noreferrer" className="relative group block">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-8 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full flex flex-col">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-brand-amber/20 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-2">Venue</h3>
                  <p className="text-white text-lg font-semibold group-hover:text-brand-amber transition-colors">
                    Sri Ramakrishna College
                  </p>
                  <p className="text-white/60 text-sm mt-2">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </a>

            {/* Help Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-8 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full flex flex-col">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-brand-amber/20 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-2">Need Help?</h3>
                  <a href="tel:+9597757356" className="text-white text-lg hover:text-brand-amber transition-colors font-mono">
                    +91 9597757356
                  </a>
                  <p className="text-white/60 text-sm mt-2">Available during event hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Go Back Button */}
          <div className="mt-10 text-center">
            <button
              onClick={onClose}
              className="font-heading text-lg px-10 py-4 bg-brand-amber text-brand-dark rounded-lg transition-all duration-300 hover:bg-transparent hover:text-brand-amber border-2 border-brand-amber hover:shadow-[0_0_25px_rgba(245,194,107,0.6)] inline-flex items-center gap-3 font-bold"
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
