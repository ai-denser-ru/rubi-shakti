import React from 'react'
import { useTranslation } from 'react-i18next'

import logo from '../assets/logo.png'

export const Header: React.FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="sticky top-0 z-50 w-full px-6 py-6 flex items-center justify-between backdrop-blur-xl bg-onyx/90 border-b border-gold/10">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-bordeaux border border-gold/40 shadow-[0_0_20px_rgba(74,4,20,0.6)] group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                        <img src={logo} alt="Rubí Shakti Logo" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="hidden sm:block">
                    <h1 className="text-2xl font-display font-bold tracking-tight text-cream leading-none mb-1">
                        Rubí <span className="text-gold">Shakti</span>
                    </h1>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-gold/60 font-bold leading-none">{t('nav.therapy')}</p>
                </div>
            </div>

            <nav className="hidden lg:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] uppercase">
                <a href="#" className="text-gold hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold">{t('nav.home')}</a>
                <a href="#courses" className="text-cream/70 hover:text-gold transition-colors">{t('nav.catalog')}</a>
                <a href="#about" className="text-cream/70 hover:text-gold transition-colors">{t('nav.about')}</a>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">{t('nav.blog')}</a>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">{t('nav.contact')}</a>
            </nav>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
                    {['ES', 'EN', 'FR'].map((lang) => (
                        <button
                            key={lang}
                            onClick={() => changeLanguage(lang.toLowerCase())}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${i18n.language.toUpperCase() === lang ? 'bg-gold text-onyx' : 'text-cream/40 hover:text-cream'
                                }`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>

                <button className="shakti-btn !px-6 !py-2 text-xs font-bold md:flex hidden">
                    {t('nav.book')}
                </button>

                <button className="lg:hidden text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    )
}
