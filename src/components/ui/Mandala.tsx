import React from 'react';

interface MandalaProps {
    className?: string;
    size?: number;
    color?: string;
    opacity?: number;
    animate?: boolean;
    speed?: number;
}

export const Mandala: React.FC<MandalaProps> = ({
    className = "",
    size = 200,
    color = "currentColor",
    opacity = 0.5,
    animate = false,
    speed = 60,
}) => {
    return (
        <div
            className={`pointer-events-none select-none ${className}`}
            style={{
                width: size,
                height: size,
                color: color,
                opacity: opacity,
                animation: animate ? `spin ${speed}s linear infinite` : 'none'
            }}
        >
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                    <g key={deg} transform={`rotate(${deg} 100 100)`}>
                        <path d="M100 20 L105 35 L100 50 L95 35 Z" fill="currentColor" opacity="0.6" />
                        <rect x="99.5" y="50" width="1" height="50" fill="currentColor" opacity="0.3" />
                    </g>
                ))}

                {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
                    <path
                        key={deg}
                        d="M100 40 Q110 50 100 60 Q90 50 100 40"
                        fill="currentColor"
                        opacity="0.4"
                        transform={`rotate(${deg} 100 100)`}
                    />
                ))}

                <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="1" opacity="0.8" />
                <circle cx="100" cy="100" r="5" fill="currentColor" opacity="0.5" />
            </svg>
        </div>
    );
};
