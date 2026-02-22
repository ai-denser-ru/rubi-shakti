import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heading, Text } from './ui/Typography';
import { Mandala } from './ui/Mandala';
import aboutImage from '../assets/rubi_method_clean.png';

export const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-32 px-6 bg-onyx relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="absolute -inset-10 bg-bordeaux/20 blur-[100px] rounded-full" />
                    <div className="relative rounded-[3rem] overflow-hidden border border-gold/20 shadow-2xl gold-rim">
                        <img
                            src={aboutImage}
                            alt="Rubí Shakti Method"
                            className="w-full h-auto object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute -bottom-6 -right-6 glass-panel gold-rim p-6 rounded-2xl backdrop-blur-xl z-20">
                        <div className="text-3xl font-display font-bold text-gold">10+</div>
                        <div className="text-[10px] uppercase tracking-widest text-cream/50">{t('about.stats.exp')}</div>
                    </div>
                </div>

                <div className="space-y-8 order-1 lg:order-2">
                    <Mandala
                        className="opacity-10 absolute -top-20 -right-20"
                        size={400}
                        color="var(--gold)"
                    />

                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/20 bg-gold/5">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <Text variant="detail" className="text-[10px]">{t('nav.about')}</Text>
                    </div>

                    <Heading variant="h2">
                        {t('about.title')} <span className="text-gold italic">{t('about.title_accent')}</span>
                    </Heading>

                    <Text>
                        {t('about.description1')}
                    </Text>

                    <Text variant="small">
                        {t('about.description2')}
                    </Text>

                    <div className="pt-6 grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-2xl font-display text-gold mb-1">500+</div>
                            <div className="text-[10px] uppercase tracking-widest text-cream/40">{t('about.stats.lives')}</div>
                        </div>
                        <div>
                            <div className="text-2xl font-display text-gold mb-1">150+</div>
                            <div className="text-[10px] uppercase tracking-widest text-cream/40">{t('about.stats.practices')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
