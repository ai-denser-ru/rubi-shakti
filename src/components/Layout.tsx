import React from 'react'
import { Header } from './Header'
import { useTranslation } from 'react-i18next'

interface LayoutProps {
    children: React.ReactNode
}

import logo from '../assets/logo.png'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col bg-onyx selection:bg-gold/30 selection:text-gold">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <footer className="py-16 px-6 border-t border-gold/10 bg-onyx-dark/50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-bordeaux border border-gold/30 overflow-hidden shadow-lg shadow-bordeaux/20">
                                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-cream font-display font-semibold text-lg tracking-tight">Rubí <span className="text-gold">Shakti</span></span>
                        </div>
                        <p className="text-cream/50 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-gold text-xs uppercase tracking-widest font-sans font-bold">{t('footer.explore')}</h4>
                        <a href="#courses" className="text-cream/60 hover:text-gold text-sm transition-colors">{t('nav.catalog')}</a>
                        <a href="#about" className="text-cream/60 hover:text-gold text-sm transition-colors">{t('nav.about')}</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-gold text-xs uppercase tracking-widest font-sans font-bold">{t('footer.contact')}</h4>
                        <p className="text-cream/60 text-sm">info@rubishakti.com</p>
                        <div className="flex justify-center md:justify-start gap-4 mt-2">
                            <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold transition-colors text-gold">IG</div>
                            <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold transition-colors text-gold">YT</div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center">
                    <p className="text-[10px] text-cream/30 uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} Rubí Shakti — {t('nav.therapy')}
                    </p>
                </div>
            </footer>
        </div>
    )
}
