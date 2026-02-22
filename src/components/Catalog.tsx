import React, { useState } from 'react';
import { courses } from '../data/courses';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { Heading, Text } from './ui/Typography';
import { ShaktiButton } from './ui/Button';
import { ModuleCard } from './ui/ModuleCard';
import { useTranslation } from 'react-i18next';
import { LotusIcon, LumbarIcon, RibcageIcon } from './ui/Icons';

export const Catalog: React.FC = () => {
    const [selectedLevel, setSelectedLevel] = useState('beginner');
    const { t } = useTranslation();

    const levels = ['beginner', 'intermediate', 'advanced'];

    return (
        <section id="courses" className="py-24 px-6 bg-shakti-gradient relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <Heading variant="h2">{t('catalog.title')} <span className="text-gold italic">{t('catalog.title_accent')}</span></Heading>
                    <Text className="max-w-2xl mx-auto">
                        {t('catalog.description')}
                    </Text>

                    <div className="inline-flex p-1 bg-onyx border border-gold/20 rounded-full mt-10">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => setSelectedLevel(level)}
                                className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${selectedLevel === level
                                    ? 'bg-gold text-onyx shadow-lg shadow-gold/20'
                                    : 'text-cream/40 hover:text-cream'
                                    }`}
                            >
                                {t(`catalog.levels.${level}`).toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {courses
                        .filter(course => !selectedLevel || course.levels.includes(selectedLevel))
                        .map((course) => (
                            <ModuleCard
                                key={course.id}
                                title={t(`catalog.courses.${course.id}.title`)}
                                description={t(`catalog.courses.${course.id}.description`)}
                                icon={
                                    course.id === 'cervical' ? <LotusIcon className="w-12 h-12" /> :
                                        course.id === 'lumbar' ? <LumbarIcon className="w-12 h-12" /> :
                                            <RibcageIcon className="w-12 h-12" />
                                }
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};
