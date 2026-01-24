// Fix: Import React type to resolve 'Cannot find namespace React'.
import type React from 'react';

export interface Round {
  title: string;
  description: string;
}

export interface Convenor {
  name: string;
  phone: string;
}

export interface Event {
  id: string;
  name: string;
  tagline: string;
  teamSize: string;
  overview: string;
  rules?: string[];
  rounds?: Round[];
  whatsappLink?: string;
  convenors: Convenor[];
  Icon: React.FC<{ className?: string }>;
}