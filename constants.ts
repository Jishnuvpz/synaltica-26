import React from 'react';
import { type Event } from './types';

// Fix: Replaced all JSX with React.createElement calls to be compatible with a .ts file.
const PromptIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, React.createElement('path', { d: "M14 2H4c-1.11 0-2 .9-2 2v10h2V4h10V2zm4 4H8c-1.11 0-2 .9-2 2v10h2V8h10V6zm-4 4H10c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM12 18l2.5-3.33L16.5 18H12zm5.5-2.5L16 14l-1.5 2h3z" }))
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

export const REGISTRATION_URL = "https://script.google.com/macros/s/AKfycbyw0gW7p0mvFeSmZM5jFQeAUafkmaraqY-AF4O36BKJsLSa5pwwzBzzrI5TTRd9PyaqgA/exec";

export const EVENTS: Event[] = [
    {
        id: 'prompt-engineering',
        name: 'Prompt Engineering',
        tagline: 'Craft the Prompt. Command the Machine.',
        teamSize: '1–3',
        Icon: PromptIcon,
        overview: 'A competitive showdown where creativity meets precision. Participants will engineer prompts that push AI models to their limits—generating optimized, structured, and high-quality outputs. This event evaluates how well you can think like the model, manipulate its behavior, and produce exceptional results under constraints.',
        rounds: [
            {
                title: 'Round 1 – Prompt Dexterity',
                description: 'Generate high-quality answers for given tasks using minimal tokens. Accuracy and efficiency matter.',
            },
            {
                title: 'Round 2 – Prompt Debugging',
                description: 'You’ll be given flawed or ambiguous prompts and must refine them to achieve perfect output.',
            },
            {
                title: 'Round 3 – Creative Command (Final)',
                description: 'Solve an open-ended challenge through advanced prompt chaining, role assignment, and structured reasoning constraints.',
            },
        ],
        convenors: [
            { name: 'Alex Johnson', phone: '+91 98765 43210' },
            { name: 'Priya Singh', phone: '+91 87654 32109' },
        ],
    },
    {
        id: 'vibe-coding',
        name: 'Vibe Coding',
        tagline: 'Code Fast. Code Smooth. Code with Vibes.',
        teamSize: '3',
        Icon: VibeCodingIcon,
        overview: 'Vibe Coding is a Coding Sprint where teams of 3 will create a functional web application with a Frontend, Backend, and Database using any modern tools. The problem statement will be given during the event. Goal: Build a simple, clear, and working Full Stack web application that solves the given problem efficiently.',
        rounds: [
            {
                title: 'Full Stack Development Challenge',
                description: 'Build a complete web application with Frontend, Backend, and Database based on the problem statement revealed at the event start.',
            },
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
        teamSize: '1–2',
        Icon: IdeaPitchingIcon,
        overview: 'Bring your innovation to life! Participants will pitch ideas addressing real-world problems, demonstrating feasibility, market impact, technical depth, and originality. It’s a battle of clarity, conviction, and creativity.',
        rounds: [
            {
                title: 'Full Pitch',
                description: '10-minute presentation + Q&A with panelists.',
            },
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
        teamSize: '1–2',
        Icon: QuizArenaIcon,
        overview: 'A thrilling tech + general knowledge quiz competition designed to test your recall power, analytical reasoning, and strategic play. Expect buzzer rounds, mind games, and rapid-fire challenges.',
        rounds: [
            {
                title: 'Round 1 – Written Screening',
                description: 'Objective MCQs covering tech, logic, and GK.',
            },
            {
                title: 'Round 2 – Rapid Relay',
                description: 'Team-based quick-response gameplay.',
            },
            {
                title: 'Round 3 – Buzzer Finals',
                description: 'High-pressure live quiz.',
            },
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
        teamSize: '1–2',
        Icon: LogoRushIcon,
        overview: 'A creative design challenge where participants craft logos based on surprise theme prompts. Show your design instincts, color theory mastery, and ability to create strong brand identity under strict time limits.',
        rounds: [
            {
                title: 'Round 1 – Theme Logo',
                description: 'Design a logo based on a short brief.',
            },
            {
                title: 'Round 2 – Redesign Challenge',
                description: 'Redesign an existing poor-quality logo.',
            },
            {
                title: 'Round 3 – Brand Pack (Final)',
                description: 'Create logo + color palette + minimal brand guide.',
            },
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
        teamSize: '1–2',
        Icon: ConnectionsIcon,
        overview: 'A unique competition focused on pattern recognition, logical deduction, and creative problem-solving. Participants will tackle a series of interconnected puzzles, where insights from one stage unlock clues for the next. It’s a test of wit, observation, and the ability to see the bigger picture.',
        rounds: [
            {
                title: 'Round 1 – Pattern Recognition',
                description: 'Identify hidden patterns and sequences in a series of visual and logical puzzles.',
            },
            {
                title: 'Round 2 – Cross-Discipline Linking',
                description: 'Connect concepts from seemingly unrelated fields to solve complex problems.',
            },
            {
                title: 'Round 3 – The Grand Connection',
                description: 'A final, multi-layered puzzle where all previous clues and patterns come together to reveal the solution.',
            },
        ],
        convenors: [
            { name: 'Jack Miller', phone: '+91 91919 19191' },
            { name: 'Kara Danvers', phone: '+91 81818 18181' },
        ],
    },
];