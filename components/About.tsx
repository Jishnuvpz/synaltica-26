
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase tracking-wider mb-8">
          About SYNALTICA '26
        </h2>
        <p className="max-w-3xl mx-auto text-white/80 leading-relaxed text-lg">
          SYNALTICA '26 is a premier tech symposium where the boundaries of innovation are pushed and the future is forged. Inspired by the fusion of ancient Greek wisdom and futuristic aesthetics, our event brings together the brightest minds in technology for a series of challenging competitions, insightful workshops, and unparalleled networking opportunities. Dive into an experience that celebrates logic, creativity, and the relentless pursuit of knowledge.
        </p>
      </div>
    </section>
  );
};

export default About;
