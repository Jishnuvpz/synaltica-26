
import React, { useMemo } from 'react';

const ParticleBackground: React.FC = () => {
    const particles = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => {
            const size = Math.random() * 3 + 2;
            const style = {
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 7 + 3}s`,
                animationDelay: `${Math.random() * 5}s`,
            };
            return <div key={i} className="absolute rounded-full bg-brand-amber/50 animate-float" style={style}></div>;
        });
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden h-screen">
            {particles}
        </div>
    );
};

export default ParticleBackground;