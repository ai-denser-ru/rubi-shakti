import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export const Heading: React.FC<TypographyProps & { variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' }> = ({
    children,
    className,
    as,
    variant = 'h2',
}) => {
    const Component = as || variant;

    const variants = {
        h1: 'text-6xl md:text-8xl tracking-tight leading-tight',
        h2: 'text-4xl md:text-5xl leading-tight',
        h3: 'text-2xl md:text-3xl leading-snug',
        h4: 'text-xl font-bold tracking-wide',
        h5: 'text-lg font-bold uppercase tracking-[0.2em]',
    };

    return (
        <Component className={cn('font-display', variants[variant], className)}>
            {children}
        </Component>
    );
};

export const Text: React.FC<TypographyProps & { variant?: 'body' | 'small' | 'detail' }> = ({
    children,
    className,
    as: Component = 'p',
    variant = 'body',
}) => {
    const variants = {
        body: 'text-lg md:text-xl text-cream/70 leading-relaxed font-medium',
        small: 'text-sm text-cream/60 leading-relaxed',
        detail: 'text-[10px] uppercase tracking-[0.3em] font-bold text-gold',
    };

    return (
        <Component className={cn('font-sans', variants[variant], className)}>
            {children}
        </Component>
    );
};
