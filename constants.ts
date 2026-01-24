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
        teamSize: '1–2',
        Icon: PromptIcon,
        overview: 'Prompt Engineering is a fun team event where participants create smart prompts to work with AI tools. Teams compete in three rounds that test clarity, logic, and creativity. The event helps students learn how to give better instructions to AI in a practical way.',
        rules: [
            'Each team must consist of 1 or 2 members only',
            'Participants must use their own creativity while framing prompts',
            'Internet access is allowed only for using approved AI tools',
            'Any form of plagiarism or use of prompt generators will lead to immediate disqualification',
            'Teams must complete each round within the given time limit',
            'Judges\' decisions will be final',
            'Teams failing to submit answers within the time limit will not be evaluated',
            'Participants must bring their own devices (laptops) for the competition. No systems will be provided by the organizers'
        ],
        rounds: [
            {
                title: 'Round 1 – Debugging',
                description: 'This round focuses on refining and improving prompts to make them clearer, more specific, and more effective. Participants must identify what is missing or unclear in a prompt and enhance it to get better AI responses. This round tests attention to detail and basic prompt-writing skills.'
            },
            {
                title: 'Round 2 – Emoji Story Remix',
                description: 'Teams are given creative visual cues and must convert them into meaningful AI outputs using well-structured prompts. This round encourages imagination, interpretation, and creative thinking while working with AI tools.'
            },
            {
                title: 'Round 3 – Reverse Prompt Guessing',
                description: 'Teams are shown a final AI output and must frame a suitable prompt that could have generated it. This round emphasizes logical thinking, understanding of prompt structure, and how outputs relate to inputs.'
            }
        ],
        whatsappLink: 'https://chat.whatsapp.com/DCcS4aHftB4AWx51TJ5rHn',
        convenors: [
            { name: 'Kavin Raj', phone: '+91 99400 31267' },
        ],
    },
    {
        id: 'vibe-coding',
        name: 'Vibe Coding',
        tagline: 'Code Fast. Code Smooth. Code with Vibes.',
        teamSize: '1–3',
        Icon: VibeCodingIcon,
        whatsappLink: 'https://chat.whatsapp.com/IR4w8gBORcwKjmYgR5GumZ?mode=gi_c',
        overview: 'VIBE CODING is a creative and hands-on coding event where participants design, build, and present a functional web-based product using modern vibecoding tools. The event focuses on innovation, usability, and real-world functionality, giving developers a platform to turn ideas into interactive digital experiences.',
        rules: [
            'Team size: 1–3 members',
            'Any vibecoding / web development tools are allowed',
            'Internet access is permitted for development purposes',
            'The project must be developed within the given time',
            'Plagiarism or use of pre-built full projects is not allowed',
            'Judges\' decision is final'
        ],
        rounds: [
            {
                title: 'Round 1 – Build & Present',
                description: 'Web development challenge based on the given theme. Participants must design, develop, and demonstrate a working web product. Evaluation criteria: Functionality, User experience & design, Innovation, Code quality / tool usage, Overall presentation.'
            }
        ],
        convenors: [
            { name: 'Jishnu', phone: '+91 89212 02318' },
        ],
    },
    {
        id: 'idea-pitching',
        name: 'Idea Pitching',
        tagline: 'Present. Persuade. Inspire.',
        teamSize: '2',
        Icon: IdeaPitchingIcon,
        overview: 'Pitch innovative ideas aligned with the UN Sustainable Development Goals (SDGs) to create real-world impact and sustainable solutions.',
        rules: [
            'Team registration: 2 persons per team',
            'Idea should be participants own content',
            'Presentation mode: PowerPoint presentation',
            'Time allocation: 5 minutes for presentation & 2 minutes for Q&A',
            'PPT template will be provided in WhatsApp group on 9th Feb'
        ],
        rounds: [
            {
                title: 'Round 1 – Pitch Presentation',
                description: '5-minute PowerPoint presentation followed by 2-minute Q&A session with judges.'
            }
        ],
        whatsappLink: 'https://chat.whatsapp.com/H9Por1XaXe2LgiZgSTDZuj',
        convenors: [
            { name: 'Darshan', phone: '+91 87549 01688' },
        ],
    },
    {
        id: 'quiz-arena',
        name: 'Mind Spark - Quiz',
        tagline: 'Think Fast. Fire Faster.',
        teamSize: '2',
        Icon: QuizArenaIcon,
        whatsappLink: 'https://chat.whatsapp.com/BUO7T3zMhOeDrse8YRvl81?mode=gi_t',
        overview: 'A thrilling tech + general knowledge quiz competition designed to test your recall power, analytical reasoning, and strategic play. Expect buzzer rounds, mind games, and rapid-fire challenges.',
        rules: [
            'A team should consist of 2 members only',
            'Minimum 25, maximum 30 teams',
            'No use of mobile phones, books or internet during the quiz',
            'College ID cards mandatory',
            'The Judges decision is final in case of any disputes'
        ],
        rounds: [
            {
                title: 'Round 1 – Preliminary',
                description: 'IQ questions in written format (25 questions). Shortlisted teams will be selected to the next round. Time allotted: 30 mins.'
            },
            {
                title: 'Round 2 – Brain Battle',
                description: 'Questions will be displayed to all. The team who raises hand first will be given priority. Each question will be given 20 seconds time to answer. Questions can be related to technical topics.'
            },
            {
                title: 'Round 3 – Hot Seat',
                description: 'Cups will be given to each team and to be arranged in pyramid shape (4-3-2-1). One person should arrange the cup and other person should answer the question. Questions include: Jumbled words, Crosswords, Linked word, Riddle word, True or false, Who am I, Connections.'
            }
        ],
        convenors: [
            { name: 'Darin', phone: '+91 90472 77787' },
        ],
    },
    {
        id: 'logo-rush',
        name: 'Logo Rush',
        tagline: 'Design Bold. Impress Fast.',
        teamSize: '2',
        Icon: LogoRushIcon,
        whatsappLink: 'https://chat.whatsapp.com/JgLUCfkTILMGGHuGhF4u2h?mode=gi_t',
        overview: 'A creative design challenge where participants craft logos based on surprise theme prompts. Theme options include Sports, Food, IT Company, and Cars & Bikes. Show your design instincts, color theory mastery, and ability to create strong brand identity under strict time limits. Duration: 2 hours 30 minutes.',
        rules: [
            'All logos must be original (no stock images or templates)',
            'Plagiarism leads to disqualification',
            'Late submissions will not be accepted',
            'Judges\' decision is final and binding',
            'Misconduct or unfair means = disqualification',
            'Organizers may modify rules if needed'
        ],
        rounds: [
            {
                title: 'Round 1 – Find the Logo (20 mins)',
                description: 'Identify brand/company names from shown logos. Each correct answer earns points. No negative marking.'
            },
            {
                title: 'Round 2 – Choose the Correct Logo (20 mins)',
                description: 'Given a brand name, choose the authentic logo from 4 options. Each correct answer earns points.'
            },
            {
                title: 'Round 3 – Design a Logo (30–45 mins)',
                description: 'Theme announced at the start. Use Canva or similar tools to design. Logo must be original, aesthetic, and theme-based. Evaluation: Creativity & Originality (30%), Relevance to Theme (30%), Color & Design Sense (20%), Presentation & Uniqueness (20%).'
            }
        ],
        convenors: [
            { name: 'Jayasakthi Balaji', phone: '+91 95007 70891' },
        ],
    },
    {
        id: 'connections',
        name: 'Connections',
        tagline: 'Find the Link. Solve the Puzzle.',
        teamSize: '2',
        Icon: ConnectionsIcon,
        overview: 'CONNECTION is a fun and interactive quiz event that tests participants\' knowledge, logic, and word-linking skills through exciting rounds.',
        rules: [
            'Team size: 2 members',
            'No mobile phones, smart watches, or calculators',
            'Tie-breaker will be conducted if required',
            'Judges\' decision is final'
        ],
        rounds: [
            {
                title: 'Round 1 – Writing Round',
                description: '40 questions | 1 mark each | Mixed themes (GK, Movies, Sports, Logic, Tech, Current Affairs, Fun)'
            },
            {
                title: 'Round 2 – Find the Word',
                description: 'Clue-based word guessing | 15 questions | 5 marks each'
            },
            {
                title: 'Round 3 – Think & Guess',
                description: 'Personalities, Advertisement & Jumbled Words | 10 marks per question | 5 bonus marks for passed questions | 20 seconds per question'
            }
        ],
        whatsappLink: 'https://chat.whatsapp.com/Ew1c4du9pepANYeQEJfLEV',
        convenors: [
            { name: 'Kaviyan', phone: '+91 87543 21530' },
        ],
    },
];