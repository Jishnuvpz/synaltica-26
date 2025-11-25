
import React from 'react';
import EventCard from './EventCard';
import { type Event } from '../types';

interface EventsProps {
  events: Event[];
  onSelectEvent: (event: Event) => void;
}

const Events: React.FC<EventsProps> = ({ events, onSelectEvent }) => {
  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase tracking-wider mb-12">
          Our Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div key={event.id} className="animate-[fadeInUp_0.6s_ease-out_both]" style={{ animationDelay: `${index * 0.1}s` }}>
              <EventCard event={event} onSelectEvent={onSelectEvent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
