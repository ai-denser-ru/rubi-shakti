import React from 'react';
import { Heart, Coffee, Wallet } from 'lucide-react';
import { Heading, Text } from './ui/Typography';
import { Mandala } from './ui/Mandala';
import { useTranslation } from 'react-i18next';

export const Donation: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="py-32 px-6 bg-shakti-gradient border-t border-gold/10 relative overflow-hidden">
            {/* Visual Depth: Moving Mandalas */}
            <Mandala
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none"
                size={800}
                color="var(--gold)"
                animate
                speed={120}
            />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-bordeaux/20 text-gold mb-10 border border-gold/20 shadow-[0_0_30px_rgba(74,4,20,0.5)]">
                    <Heart size={36} strokeWidth={1.5} />
                </div>

                <Heading variant="h2" className="mb-8">{t('donation.title')} <span className="text-gold italic">{t('donation.title_accent')}</span></Heading>
                <Text className="max-w-2xl mx-auto mb-16 leading-relaxed opacity-80">
                    {t('donation.description')}
                </Text>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Coffee, title: t('donation.items.coffee.title'), sub: t('donation.items.coffee.sub') },
                        { icon: Wallet, title: t('donation.items.wallets.title'), sub: t('donation.items.wallets.sub') },
                        { icon: Heart, title: t('donation.items.support.title'), sub: t('donation.items.support.sub') }
                    ].map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className="glass-panel gold-rim p-10 rounded-[2rem] group hover:bg-gold hover:text-onyx transition-all duration-700 hover:-translate-y-2 shadow-xl"
                        >
                            <item.icon className="mx-auto mb-6 group-hover:scale-110 transition-transform" size={28} strokeWidth={1.5} />
                            <Heading variant="h4" className="mb-2">{item.title}</Heading>
                            <Text variant="detail" className="text-[9px] opacity-40 group-hover:text-onyx">{item.sub}</Text>
                        </a>
                    ))}
                </div>

                <div className="mt-20 p-10 rounded-[2.5rem] border border-dashed border-gold/30 bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                    <Text variant="detail" className="mb-6">{t('donation.direct')}</Text>
                    <code className="text-lg text-gold font-mono bg-onyx/80 px-6 py-3 rounded-xl border border-gold/10 break-all select-all shadow-inner">
                        0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                    </code>
                    <p className="text-[10px] text-cream/20 mt-6 uppercase tracking-[0.4em]">{t('donation.accepted')}</p>
                </div>
            </div>
        </section>
    );
};
