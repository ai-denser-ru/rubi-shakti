import React from 'react';

/**
 * High-fidelity Lotus Icon for Cervical Care.
 * Features multiple layers of petals and a central focal point.
 */
export const LotusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g opacity="0.9">
            {/* Outer Petals */}
            <path d="M50 85C50 85 20 70 20 45C20 30 35 20 50 20C65 20 80 30 80 45C80 70 50 85 50 85Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Side Petals (Lower) */}
            <path d="M50 80C35 75 10 60 10 40C10 25 25 15 40 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M50 80C65 75 90 60 90 40C90 25 75 15 60 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

            {/* Inner Petals */}
            <path d="M50 75C50 75 35 60 35 45C35 35 42 30 50 30C58 30 65 35 65 45C65 60 50 75 50 75Z" fill="currentColor" opacity="0.3" />
            <path d="M50 75C50 75 35 65 35 45C35 35 42 40 50 40C58 40 65 35 65 45C65 65 50 75 50 75Z" stroke="currentColor" strokeWidth="1.5" />

            {/* Top Detail */}
            <path d="M50 40V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Center Focal Point */}
            <circle cx="50" cy="50" r="4" fill="currentColor" />
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
        </g>
    </svg>
);

/**
 * High-fidelity Sacrum/Lumbar Icon for Lumbar Relief.
 * Features the broad sacral base and detailed lumbar vertebrae.
 */
export const LumbarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g opacity="0.9">
            {/* Sacrum (Broad Base) */}
            <path d="M30 80Q50 90 70 80Q75 65 50 60Q25 65 30 80Z" fill="currentColor" opacity="0.2" />
            <path d="M30 80Q50 90 70 80Q75 65 50 60Q25 65 30 80Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

            {/* Vertebrae (L5 to L1) */}
            {[70, 58, 46, 34, 22].map((y, i) => (
                <g key={y} opacity={1 - (i * 0.1)}>
                    {/* Vertebral Body */}
                    <rect x={38 + (i * 1.5)} y={y} width={24 - (i * 3)} height={8} rx="2" stroke="currentColor" strokeWidth="1.5" />
                    {/* Transverse Processes (Side Wings) */}
                    <path d={`M${36 + (i * 1.5)} ${y + 4} L${38 + (i * 1.5)} ${y + 4}`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d={`M${62 - (i * 1.5)} ${y + 4} L${64 - (i * 1.5)} ${y + 4}`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Intervertebral Disc Area */}
                    {i < 4 && <path d={`M50 ${y} V${y - 4}`} stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" opacity="0.4" />}
                </g>
            ))}

            {/* Central Channel Glow Effect (Subtle) */}
            <path d="M50 85V20" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        </g>
    </svg>
);

/**
 * High-fidelity Ribcage/Thoracic Icon for Dorsal Health.
 * Features the central spine and curved ribs.
 */
export const RibcageIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g opacity="0.9">
            {/* Central Sternum/Spine Column */}
            <rect x="47" y="15" width="6" height="70" rx="3" fill="currentColor" opacity="0.1" />
            <path d="M50 15V85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Ribs (Left and Right) */}
            {[25, 37, 49, 61, 73].map((y, i) => (
                <g key={y} opacity={0.6 + (i * 0.1)}>
                    {/* Right Ribs */}
                    <path d={`M53 ${y} Q${75 + (i * 2)} ${y} ${80 - (i * 2)} ${y + 8}`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Left Ribs */}
                    <path d={`M47 ${y} Q${25 - (i * 2)} ${y} ${20 + (i * 2)} ${y + 8}`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </g>
            ))}

            {/* Articulations */}
            {[25, 37, 49, 61, 73].map((y) => (
                <circle key={y} cx="50" cy={y} r="1.5" fill="currentColor" />
            ))}
        </g>
    </svg>
);
