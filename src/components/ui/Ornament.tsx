import React from 'react';

export const Ornament: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/40" />
        <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 border border-gold/40 rotate-45" />
            <div className="w-2 h-2 bg-gold shadow-[0_0_10px_#C5A059]" />
        </div>
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
);
