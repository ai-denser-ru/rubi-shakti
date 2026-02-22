import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const ShaktiButton: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}) => {
    const variants = {
        primary: 'bg-bordeaux text-cream border border-gold hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]',
        secondary: 'bg-gold text-onyx hover:bg-gold-light shadow-[0_4px_15px_rgba(197,160,89,0.4)]',
        outline: 'bg-transparent border border-gold/40 text-gold hover:bg-gold/5',
        ghost: 'bg-transparent text-cream/60 hover:text-gold hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-4 py-1.5 text-xs',
        md: 'px-8 py-3 text-sm',
        lg: 'px-10 py-4 text-base',
    };

    return (
        <button
            className={cn(
                'rounded-full font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 disabled:opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
