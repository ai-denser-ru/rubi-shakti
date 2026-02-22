import React from 'react';
import { Heading, Text } from './Typography';
import { ShaktiButton } from './Button';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ModuleCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
    title,
    description,
    icon,
    onClick,
    className = ""
}) => {
    const { t } = useTranslation();
    return (
        <div
            className={`glass-panel gold-rim p-12 rounded-[2.5rem] group hover:border-gold transition-all duration-700 hover:-translate-y-3 relative overflow-hidden flex flex-col items-center text-center ${className}`}
        >
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            {/* Icon Frame - High Fidelity */}
            <div className="relative mb-10">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Decorative Frame */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 border border-gold/30 rounded-full rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
                    <div className="absolute inset-2 border border-gold/10 rounded-full -rotate-45 group-hover:-rotate-90 transition-transform duration-1000" />

                    {/* The Icon */}
                    <div className="relative z-10 text-gold group-hover:scale-110 transition-transform duration-500">
                        {icon}
                    </div>
                </div>
            </div>

            <div className="space-y-4 flex-grow">
                <Heading variant="h4" className="text-xl tracking-tight group-hover:text-gold transition-colors">{title}</Heading>
                <Text variant="small" className="opacity-60 leading-relaxed">{description}</Text>
            </div>

            <div className="mt-10 pt-6 border-t border-gold/10 w-full flex justify-center">
                <ShaktiButton
                    variant="outline"
                    size="sm"
                    className="w-fit flex items-center gap-3 group/btn hover:bg-gold hover:text-onyx transition-all duration-500"
                    onClick={onClick}
                >
                    {t('catalog.view_program').toUpperCase()} <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </ShaktiButton>
            </div>
        </div>
    );
};
