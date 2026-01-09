import React, { useState } from 'react';

interface AboutPageProps {
  onClose: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'organizers' | 'department'>('overview');

  const tabs = [
    { id: 'overview' as const, label: 'Overview' },
    { id: 'organizers' as const, label: 'Organizers' },
    { id: 'department' as const, label: 'Department' }
  ];

  const organizers = [
    {
      name: 'YESWANTH RAJ S',
      role: 'Dept Chairman',
      year: '3rd Year CS&DA',
      description: 'Leading the organization with vision and dedication',
      email: undefined,
      image: '/ORGANIZERS/STUDENT_COORDINATORS/CHAIRMAN.jpeg'
    },
    {
      name: 'VISHNU RAM S',
      role: 'Dept Secretary & Developer',
      year: '2nd Year CS&DA',
      description: 'Managing operations and technical development',
      email: undefined,
      image: '/ORGANIZERS/STUDENT_COORDINATORS/SECRETARY.jpeg'
    }
  ];

  const staffCoordinators = [
    { name: 'Dr.M.Praneesh', role: 'Staff Coordinator', department: 'CS&DA Department', description: 'Guiding and mentoring the entire event', email: undefined },
    { name: 'Dr.A.Senthil Kumar', role: 'Staff Coordinator', department: 'CS&DA Department', description: 'Guiding and mentoring the entire event', email: undefined },
    { name: 'Dr.Ginne M James', role: 'Staff Coordinator', department: 'CS&DA Department', description: 'Guiding and mentoring the entire event', email: undefined },
    { name: 'Dr.Tintu George', role: 'Staff Coordinator', department: 'CS&DA Department', description: 'Guiding and mentoring the entire event', email: undefined },
    { name: 'Dr.K.Rathi', role: 'Staff Coordinator', department: 'CS&DA Department', description: 'Guiding and mentoring the entire event', email: undefined },
    { name: 'Ms.M.Aswathi', role: 'Staff Coordinator', department: 'CS&DA Department', description: 'Guiding and mentoring the entire event', email: undefined },
  ];

  const developer = {
    name: 'JISHNU .B',
    role: 'Developer',
    year: '2nd Year CS&DA',
    department: 'CS&DA Department',
    description: 'Crafting the digital experience',
    email: undefined,
    image: '/ORGANIZERS/STUDENT_COORDINATORS/DEVELOPER.jpeg'
  };

  const eventStats = [
    { label: 'Events', value: '7' },
    { label: 'Expected Participants', value: '500+' },
    { label: 'Duration', value: '1 Day' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/95 backdrop-blur-md overflow-y-auto py-8 px-4 animate-[fadeIn_0.3s_ease-out]">
      <div className="relative w-full max-w-6xl my-auto animate-[fadeInUp_0.5s_ease-out]">
        <div className="glassmorphism rounded-2xl p-6 md:p-10 border border-brand-amber/30 shadow-[0_0_40px_rgba(245,194,107,0.15)]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header Section */}
          <div className="text-center mb-8 animate-[fadeInUp_0.5s_ease-out_0.1s_both]">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide lg:tracking-wider mb-3 animate-glow">
              About SYNALTICA '26
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-amber to-transparent mx-auto mb-4"></div>
            <p className="text-brand-amber-dark text-sm md:text-base uppercase tracking-widest">Where Innovation Meets Excellence</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
            <div className="inline-flex glassmorphism rounded-xl p-1 border border-brand-amber/20">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-heading text-sm md:text-base transition-all duration-300 animate-[fadeInUp_0.5s_ease-out_both] ${
                    activeTab === tab.id
                      ? 'bg-brand-amber text-brand-dark shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out]">
                {/* Introduction */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/5 to-brand-burgundy/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/40 transition-all duration-300">
                    <p className="text-white/90 leading-relaxed text-base md:text-lg text-center">
                      SYNALTICA '26 is a premier tech symposium where the boundaries of innovation are pushed and the future is forged. 
                      Inspired by the fusion of ancient Greek wisdom and futuristic aesthetics, our event brings together the brightest 
                      minds in technology for a series of challenging competitions, insightful workshops, and unparalleled networking opportunities.
                    </p>
                  </div>
                </div>

                {/* Event Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {eventStats.map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="relative group animate-[fadeInUp_0.5s_ease-out_both]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      <div className="relative glassmorphism rounded-xl p-5 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 text-center">
                        <div className="text-2xl md:text-3xl font-bold text-brand-amber mb-1">{stat.value}</div>
                        <div className="text-white/70 text-xs md:text-sm">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* What We Offer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative glassmorphism rounded-xl p-5 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full">
                      <div className="text-center">
                        <div className="inline-flex p-3 bg-brand-amber/20 rounded-lg mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="font-heading text-lg text-brand-amber mb-2">Competitions</h3>
                        <p className="text-white/70 text-sm">
                          7 exciting technical challenges across AI, Coding, Design, and Analytics
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative glassmorphism rounded-xl p-5 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full">
                      <div className="text-center">
                        <div className="inline-flex p-3 bg-brand-amber/20 rounded-lg mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h3 className="font-heading text-lg text-brand-amber mb-2">Networking</h3>
                        <p className="text-white/70 text-sm">
                          Connect with 500+ tech enthusiasts and industry professionals
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/5 to-brand-burgundy/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative glassmorphism rounded-xl p-5 border border-brand-amber/20 hover:border-brand-amber/40 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-brand-amber font-heading text-xs uppercase tracking-wide mb-2">Date</div>
                        <div className="text-white text-lg font-semibold">February 13, 2026</div>
                      </div>
                      <div>
                        <div className="text-brand-amber font-heading text-xs uppercase tracking-wide mb-2">Venue</div>
                        <div className="text-white text-lg font-semibold">Sri Ramakrishna College</div>
                      </div>
                      <div>
                        <div className="text-brand-amber font-heading text-xs uppercase tracking-wide mb-2">Time</div>
                        <div className="text-white text-lg font-semibold">9:00 AM - 5:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Organizers Tab */}
            {activeTab === 'organizers' && (
              <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out]">
                {/* Staff Coordinators */}
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-brand-amber mb-4 text-center">Staff Coordinators</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {staffCoordinators.map((coordinator, idx) => (
                      <div key={coordinator.name} className="relative group animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/30 hover:border-brand-amber/60 transition-all duration-300">
                          <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-amber to-brand-burgundy p-1 flex-shrink-0">
                              <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center">
                                <span className="text-3xl font-bold text-brand-amber">{coordinator.name.charAt(0)}</span>
                              </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <h4 className="font-heading text-xl text-brand-amber mb-2">{coordinator.name}</h4>
                              <p className="text-white/70 text-base mb-3">{coordinator.role}</p>
                              <p className="text-white/80 leading-relaxed mb-4">{coordinator.description}</p>
                              {coordinator.email && (
                                <div className="flex items-center justify-center md:justify-start gap-2 text-brand-amber text-sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>{coordinator.email}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Organizers */}
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-brand-amber mb-4 text-center">Student Organizers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {organizers.map((organizer, index) => (
                      <div 
                        key={organizer.name}
                        className="relative group animate-[fadeInUp_0.5s_ease-out_both]"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300 h-full">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-amber to-brand-burgundy p-1 mb-4">
                              <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center overflow-hidden">
                                <img 
                                  src={organizer.image} 
                                  alt={organizer.name}
                                  className="w-full h-full object-cover"
                                  style={{ objectPosition: 'center 20%' }}
                                />
                              </div>
                            </div>
                            <h4 className="font-heading text-lg text-brand-amber mb-1">{organizer.name}</h4>
                            <p className="text-white/70 text-sm mb-2">{organizer.role}</p>
                            <div className="flex items-center gap-2 text-white/60 text-xs mb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                              <span>{organizer.year}</span>
                            </div>
                            <p className="text-white/80 text-sm leading-relaxed">{organizer.description}</p>
                            {organizer.email && (
                              <div className="mt-4 flex items-center gap-2 text-brand-amber text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>{organizer.email}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Developer */}
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-brand-amber mb-4 text-center">Developer</h3>
                  <div className="max-w-md mx-auto">
                    <div className="relative group animate-[fadeInUp_0.5s_ease-out_0.3s_both]">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-amber to-brand-burgundy p-1 mb-4">
                            <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center overflow-hidden">
                              <img 
                                src={developer.image} 
                                alt={developer.name}
                                className="w-full h-full object-cover"
                                style={{ objectPosition: 'center 20%' }}
                              />
                            </div>
                          </div>
                          <h4 className="font-heading text-lg text-brand-amber mb-1">{developer.name}</h4>
                          <p className="text-white/70 text-sm mb-2">{developer.role}</p>
                          <div className="flex items-center gap-2 text-white/60 text-xs mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>{developer.year}</span>
                          </div>
                          <p className="text-white/80 text-sm leading-relaxed">{developer.description}</p>
                          {developer.email && (
                            <div className="mt-4 flex items-center gap-2 text-brand-amber text-xs">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span>{developer.email}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Department Tab */}
            {activeTab === 'department' && (
              <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out]">
                {/* Department Header */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative glassmorphism rounded-xl p-8 border border-brand-amber/30 hover:border-brand-amber/50 transition-all duration-300 text-center">
                    <div className="inline-flex p-4 bg-brand-amber/20 rounded-xl mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl text-brand-amber mb-2">Computer Science with Data Analytics</h3>
                    <p className="text-white/60 text-sm uppercase tracking-wide">Integrated with TCS ION</p>
                  </div>
                </div>

                {/* Department Description */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/5 to-brand-burgundy/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative glassmorphism rounded-xl p-6 border border-brand-amber/20 hover:border-brand-amber/40 transition-all duration-300">
                    <div className="space-y-4 text-white/90 leading-relaxed">
                      <p className="text-base md:text-lg">
                        The <span className="text-brand-amber font-semibold">Computer Science with Data Analytics</span> program at Sri Ramakrishna College of Arts and Science 
                        is designed to equip students with cutting-edge skills in both computer science fundamentals and advanced data analytics techniques.
                      </p>
                      <p className="text-base md:text-lg">
                        Our program is <span className="text-brand-amber font-semibold">integrated with TCS ION</span>, providing students with industry-recognized certifications 
                        and real-world project experience. This partnership ensures that our graduates are not just academically prepared, but are 
                        industry-ready professionals with practical skills in data science, machine learning, and software development.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative glassmorphism rounded-xl p-5 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-brand-amber/20 rounded-lg flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-heading text-brand-amber mb-2">Industry Certifications</h4>
                          <p className="text-white/70 text-sm">TCS ION certified curriculum with recognized industry credentials</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative glassmorphism rounded-xl p-5 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-brand-amber/20 rounded-lg flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-heading text-brand-amber mb-2">Data Analytics Focus</h4>
                          <p className="text-white/70 text-sm">Comprehensive training in data science, ML, and analytics tools</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative glassmorphism rounded-xl p-5 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-brand-amber/20 rounded-lg flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-heading text-brand-amber mb-2">Career Opportunities</h4>
                          <p className="text-white/70 text-sm">Direct placement assistance and internship opportunities with TCS</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-brand-burgundy/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative glassmorphism rounded-xl p-5 border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-brand-amber/20 rounded-lg flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-heading text-brand-amber mb-2">Hands-on Projects</h4>
                          <p className="text-white/70 text-sm">Real-world projects and case studies from industry partners</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
