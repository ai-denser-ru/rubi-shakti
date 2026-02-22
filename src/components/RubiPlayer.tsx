import React, { useState } from 'react';
import { Play, Maximize, Settings, Volume2, Shield } from 'lucide-react';
import { ShaktiButton } from './ui/Button';
import { useTranslation } from 'react-i18next';

interface RubiPlayerProps {
    videoUrl?: string;
    thumbnailUrl?: string;
    title?: string;
}

export const RubiPlayer: React.FC<RubiPlayerProps> = ({
    videoUrl = "#",
    thumbnailUrl = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    title = "Cervical Alignment Technique"
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="relative group rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-onyx">
            {/* Main Video Area */}
            <div className="aspect-video bg-onyx-dark relative overflow-hidden">
                <img
                    src={thumbnailUrl}
                    alt={title}
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-20' : 'opacity-60'}`}
                />

                {/* Ambient Glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-gold/5 to-transparent pointer-events-none" />

                {/* Zoom Inset (The "Two-in-One" requirement) */}
                <div className="absolute bottom-6 right-6 w-32 h-32 md:w-56 md:h-56 rounded-full border-2 border-gold/80 bg-onyx/90 overflow-hidden shadow-[0_0_40px_rgba(197,160,89,0.3)] z-20 group-hover:scale-105 transition-all duration-700 ease-out">
                    <div className="relative w-full h-full">
                        <img
                            src={thumbnailUrl}
                            alt="Detail zoom"
                            className="w-full h-full object-cover scale-[3] origin-center opacity-70"
                        />

                        {/* Anatomical SVG Spine Overlay - More detailed */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-screen pointer-events-none">
                            <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 text-gold">
                                {/* Detailed Vertebrae */}
                                {[20, 32, 44, 56, 68, 80].map((y) => (
                                    <g key={y}>
                                        <rect x="42" y={y} width="16" height="6" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8" />
                                        <path d={`M40 ${y + 3} L42 ${y + 3}`} stroke="currentColor" strokeWidth="0.5" />
                                        <path d={`M58 ${y + 3} L60 ${y + 3}`} stroke="currentColor" strokeWidth="0.5" />
                                        <path d={`M45 ${y} Q50 ${y - 2} 55 ${y}`} stroke="currentColor" strokeWidth="0.5" fill="none" />
                                    </g>
                                ))}
                                {/* Central Canal */}
                                <path
                                    d="M50 15 L50 85"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeDasharray="2 2"
                                    className="animate-[pulse_4s_ease-in-out_infinite]"
                                />
                            </svg>
                        </div>

                        {/* Interactive Spine Glow Focus Point */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-500">
                            <div className="relative">
                                <div className="absolute inset-0 w-8 h-8 -translate-x-4 -translate-y-4 bg-spineGlow/30 rounded-full animate-[ping_3s_linear_infinite]" />
                                <div className="absolute inset-0 w-6 h-6 -translate-x-3 -translate-y-3 bg-spineGlow/20 rounded-full animate-pulse" />
                                <div className="w-3.5 h-3.5 bg-spineGlow rounded-full shadow-[0_0_20px_#FFD700] border border-white relative z-10" />
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-0 w-full text-center">
                            <span className="text-[9px] font-bold text-gold tracking-widest uppercase bg-onyx/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gold/20 shadow-lg">
                                {t('player.biomechanical')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Play Overlay */}
                {!isPlaying && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] group-hover:bg-black/20 transition-all duration-500">
                        <ShaktiButton
                            variant="secondary"
                            size="lg"
                            className="w-20 h-20 rounded-full p-0 flex items-center justify-center group/btn"
                            onClick={() => setIsPlaying(true)}
                        >
                            <Play fill="currentColor" size={32} className="ml-1 group-hover/btn:scale-110 transition-transform" />
                        </ShaktiButton>
                        <h4 className="mt-8 text-gold font-display text-2xl tracking-tight italic opacity-90">{title}</h4>
                        <div className="mt-2 flex items-center gap-2 text-cream/40 text-xs tracking-widest uppercase">
                            <Shield size={12} /> {t('player.expert')}
                        </div>
                    </div>
                )}

                {/* Controls Bar */}
                <div className="absolute bottom-0 left-0 w-full px-6 py-6 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center justify-between text-cream/70">
                        <div className="flex items-center gap-6">
                            <Play size={20} className="hover:text-gold cursor-pointer transition-colors" />
                            <Volume2 size={20} className="hover:text-gold cursor-pointer transition-colors" />
                            <span className="text-[10px] font-bold tracking-[0.2em]">04:20 | 12:00</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Settings size={18} className="hover:text-gold cursor-pointer transition-colors" />
                            <Maximize size={18} className="hover:text-gold cursor-pointer transition-colors" />
                        </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden cursor-pointer group/progress">
                        <div className="h-full w-1/3 bg-gold relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover/progress:scale-100 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Accent Frames */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
    );
};
