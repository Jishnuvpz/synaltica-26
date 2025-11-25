import React from 'react';
import { type Event } from './types';

// Fix: Replaced all JSX with React.createElement calls to be compatible with a .ts file.
const PromptIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, React.createElement('path', { d: "M14 2H4c-1.11 0-2 .9-2 2v10h2V4h10V2zm4 4H8c-1.11 0-2 .9-2 2v10h2V8h10V6zm-4 4H10c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM12 18l2.5-3.33L16.5 18H12zm5.5-2.5L16 14l-1.5 2h3z" }))
);

const DataVizIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, React.createElement('path', { d: "M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" }))
);

const VibeCodingIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, React.createElement('path', { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" }))
);

const IdeaPitchingIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, React.createElement('path', { d: "M4 17.17V4h16v12H5.17L4 17.17zM4 2c-1.1 0-2 .9-2 2v15l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm6 7h4v2h-4v-2zm-2 2h2v2H8v-2zm6-2h2v2h-2v-2z" }))
);

const QuizArenaIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, React.createElement('path', { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" }))
);

const LogoRushIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, React.createElement('path', { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5zM12 13.66l-7.39-3.66L12 6.34l7.39 3.66L12 13.66z" }))
);

const ConnectionsIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, React.createElement('path', { d: "M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zM4 18a4 4 0 0 1 4-4h4v-2H8a6 6 0 0 0-6 6v2h8v-2H4zM12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" }))
);

export const REGISTRATION_URL = "https://script.google.com/macros/s/AKfycbzBMB62PWPvs0lM7KbkqS8d7WIPFg5t8cU8PQDmT89D4CkUPcjZVmc93UtHQhB0bUv1IQ/exec";

export const EVENTS: Event[] = [
    {
        id: 'prompt-engineering',
        name: 'Prompt Engineering',
        tagline: 'Craft the Prompt. Command the Machine.',
        teamSize: '2',
        prizePool: '₹8,000',
        Icon: PromptIcon,
        overview: 'Prompt Engineering is a focused competition where teams craft and iterate prompts to extract accurate, efficient, and well-formatted outputs from AI models. The aim is precision — fewer tokens, clearer constraints, and repeatable correctness under time limits.',
        rounds: [
            {
                title: 'Challenge Format',
                description: 'Timed rounds where teams must craft, optimize and debug prompts to meet scoring criteria (accuracy, brevity, format).',
                rules: [
                    'Team size: 2 members.',
                    'Prompts must be authored during the round—no pre-filled scripts or prompt banks.',
                    'Judging is based on output correctness, conciseness, and creativity.',
                    'Be honest — plagiarism or copying is disallowed.',
                    'Rounds are strictly timed; manage your time and submit before the deadline.'
                ]
            },
        ],
        convenors: [
            { name: 'Alex Johnson', phone: '+91 98765 43210' },
            { name: 'Priya Singh', phone: '+91 87654 32109' },
        ],
    },
    {
        id: 'data-visualization',
        name: 'Data Visualization',
        tagline: 'See the Data. Shape the Story.',
        teamSize: '3',
        prizePool: '₹10,000',
        Icon: DataVizIcon,
        overview: 'Data Visualization challenges teams to turn raw data into clear, insightful visual stories. Emphasis is on data cleaning, visualization clarity, and narrative explanation to surface meaningful conclusions.',
        rounds: [
            {
                title: 'Visualization Sprint',
                description: 'Teams receive a dataset and must design an effective visual narrative highlighting key insights.',
                rules: [
                    'Team size: 3 members.',
                    'Use the provided dataset and document any cleaning/preprocessing steps.',
                    'Cite any external sources or libraries used.',
                    'Judging will consider clarity, correctness, and storytelling.',
                    'Work should be original and produced during the event timeframe.'
                ]
            }
        ],
        convenors: [
            { name: 'Ben Carter', phone: '+91 76543 21098' },
            { name: 'Sara Khan', phone: '+91 65432 10987' },
        ],
    },
    {
        id: 'vibe-coding',
        name: 'Vibe Coding',
        tagline: 'Code Fast. Code Smooth. Code with Vibes.',
        teamSize: '3',
        prizePool: 'TBD',
        Icon: VibeCodingIcon,
        overview: 'Vibe Coding is a fast-paced Full-Stack sprint where teams build a working web application within the event time. Focus on practical, polished demos and a clear problem-solution implementation.',
        rounds: [
            {
                title: 'Sprint & Demo',
                description: 'Teams must deliver a working full-stack application and a short demo to the judges.',
                rules: [
                    'Team size: 3 members.',
                    'Work must be produced during the event; do not bring pre-built apps.',
                    'Any development tools and platforms are allowed — mention them during submission.',
                    'Judging is based on completeness, UX, and technical soundness.',
                    'Prepare a short demo and be ready to answer questions from judges.'
                ]
            }
        ],
        convenors: [
            { name: 'Chris Lee', phone: '+91 91234 56789' },
            { name: 'Maya Reddy', phone: '+91 81234 56789' },
        ],
    },
    {
        id: 'idea-pitching',
        name: 'Idea Pitching',
        tagline: 'Present. Persuade. Inspire.',
        teamSize: '2',
        prizePool: '₹15,000',
        Icon: IdeaPitchingIcon,
        overview: 'Idea Pitching is a concise, persuasive pitch competition where teams present original startup or product ideas to judges. Clarity, feasibility and market potential are key evaluation criteria.',
        rounds: [
            {
                title: 'Pitch Track',
                description: 'Submit a short abstract, deliver an elevator pitch, and present a final pitch with Q&A if selected.',
                rules: [
                    'Team size: 2 members.',
                    'Ideas must be original and not previously published.',
                    'Abstracts should be succinct (500 words max).',
                    'Keep pitch sections within the prescribed time limits; follow the judges’ decisions.'
                ]
            }
        ],
        convenors: [
            { name: 'Diana Ross', phone: '+91 71234 56789' },
            { name: 'Omar Ahmed', phone: '+91 61234 56789' },
        ],
    },
    {
        id: 'quiz-arena',
        name: 'Quiz Arena',
        tagline: 'Think Fast. Fire Faster.',
        teamSize: '2',
        prizePool: '₹6,000',
        Icon: QuizArenaIcon,
        overview: 'Quiz Arena is a rapid-fire quiz that tests general knowledge and technical topics across multiple fast rounds with buzzer and pen-and-paper segments.',
        rounds: [
            {
                title: 'Quiz Rounds',
                description: 'A mix of written screenings and live buzzer rounds to test speed and correctness.',
                rules: [
                    'Team size: 2 members.',
                    'No electronic devices or internet access allowed during the contest.',
                    'Answer quickly and accurately — wrong answers may incur penalties.',
                    'Respect the quizmaster and follow instructions.'
                ]
            }
        ],
        convenors: [
            { name: 'Frank White', phone: '+91 99887 76655' },
            { name: 'Grace Liu', phone: '+91 88776 65544' },
        ],
    },
    {
        id: 'logo-rush',
        name: 'Logo Rush',
        tagline: 'Design Bold. Impress Fast.',
        teamSize: '2',
        prizePool: '₹7,000',
        Icon: LogoRushIcon,
        overview: 'Logo Rush is a timed creative design contest where teams create original logo concepts and minimal brand assets under pressure.',
        rounds: [
            {
                title: 'Design Sprint',
                description: 'Create an original logo and brief brand guide based on a surprise brief.',
                rules: [
                    'Team size: 2 members.',
                    'Designs must be created during the event and be original.',
                    'No stock or pre-made templates allowed.',
                    'Final submissions should include vector assets (SVG or AI) and a short rationale.'
                ]
            }
        ],
        convenors: [
            { name: 'Heidi Chen', phone: '+91 77665 54433' },
            { name: 'Ivan Petrov', phone: '+91 66554 43322' },
        ],
    },
    {
        id: 'connections',
        name: 'Connections',
        tagline: 'Find the Link. Solve the Puzzle.',
        teamSize: '2',
        prizePool: '₹30,000',
        Icon: ConnectionsIcon,
        overview: 'Connections is a puzzle-driven event where teams uncover links between seemingly unrelated clues. This is about pattern recognition, reasoning and creative problem solving under a time limit.',
        rounds: [
            {
                title: 'Puzzle Relay',
                description: 'Solve a series of interconnected puzzles where each answer feeds into the next stage.',
                rules: [
                    'Team size: 2 members.',
                    'No external assistance or internet use is allowed.',
                    'Teams may use hints at the cost of points.',
                    'Work quickly and collaboratively — scoring rewards accuracy and speed.'
                ]
            }
        ],
        convenors: [
            { name: 'Jack Miller', phone: '+91 91919 19191' },
            { name: 'Kara Danvers', phone: '+91 81818 18181' },
        ],
    },
];