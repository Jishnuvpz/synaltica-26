import React from 'react';

interface AboutPageProps {
  onClose: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/95 backdrop-blur-md overflow-y-auto py-8 px-4 animate-[fadeIn_0.3s_ease-out]">
      <div className="relative w-full max-w-5xl my-auto animate-[fadeInUp_0.5s_ease-out]">
        <div className="glassmorphism rounded-2xl p-8 md:p-12 border border-brand-amber/30 shadow-[0_0_40px_rgba(245,194,107,0.15)]">
          {/* Header Section */}
          <div className="text-center mb-10 animate-[fadeInUp_0.5s_ease-out_0.1s_both]">
            <h2 className="font-heading text-5xl md:text-6xl font-black text-white uppercase tracking-wider mb-3 animate-glow">
              About SYNALTICA '26
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-amber to-transparent mx-auto mb-6"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/5 to-brand-burgundy/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/40 transition-all duration-300">
                <p className="text-white/90 leading-relaxed text-lg">
                  SYNALTICA '26 is a premier tech symposium where the boundaries of innovation are pushed and the future is forged. 
                  Inspired by the fusion of ancient Greek wisdom and futuristic aesthetics, our event brings together the brightest 
                  minds in technology for a series of challenging competitions, insightful workshops, and unparalleled networking opportunities.
                </p>
              </div>
            </div>

            {/* What We Offer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-brand-amber/20 rounded-lg mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-xl text-brand-amber mb-3">Competitions</h3>
                    <p className="text-white/70 text-sm">
                      Test your skills in cutting-edge technical challenges designed to push your limits and showcase your expertise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-brand-amber/20 rounded-lg mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-xl text-brand-amber mb-3">Workshops</h3>
                    <p className="text-white/70 text-sm">
                      Learn from industry experts through hands-on workshops covering the latest technologies and trends.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-brand-amber/20 rounded-lg mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-xl text-brand-amber mb-3">Networking</h3>
                    <p className="text-white/70 text-sm">
                      Connect with like-minded tech enthusiasts, professionals, and innovators from diverse backgrounds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/5 to-brand-burgundy/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/40 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-brand-amber font-heading text-sm uppercase tracking-wide mb-2">Date</div>
                    <div className="text-white text-xl font-semibold">February 13, 2026</div>
                  </div>
                  <div>
                    <div className="text-brand-amber font-heading text-sm uppercase tracking-wide mb-2">Venue</div>
                    <div className="text-white text-xl font-semibold">Sri Ramakrishna College</div>
                  </div>
                  <div>
                    <div className="text-brand-amber font-heading text-sm uppercase tracking-wide mb-2">Department</div>
                    <div className="text-white text-xl font-semibold">Computer Science with Data Analytics</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/5 to-brand-burgundy/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/40 transition-all duration-300">
                <h3 className="font-heading text-2xl text-brand-amber mb-4 text-center">Our Vision</h3>
                <p className="text-white/90 leading-relaxed text-center">
                  To create an immersive platform that celebrates logic, creativity, and the relentless pursuit of knowledge. 
                  SYNALTICA '26 embodies the spirit of innovation where ancient wisdom meets cutting-edge technology, 
                  fostering an environment where the future is not just imagined, but actively created.
                </p>
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

export default AboutPage;
