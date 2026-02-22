import { Layout } from './components/Layout'
import { Catalog } from './components/Catalog'
import { RubiPlayer } from './components/RubiPlayer'
import { Donation } from './components/Donation'
import { Heading, Text } from './components/ui/Typography'
import { ShaktiButton } from './components/ui/Button'
import { Mandala } from './components/ui/Mandala'
import { About } from './components/About'
import { Ornament } from './components/ui/Ornament'
import { useTranslation } from 'react-i18next'
import heroImage from './assets/hero_clean_bg.png'
import tryThumbnail from './assets/video_thumbnail_clean.png'

function App() {
    const { t } = useTranslation();
    return (
        <Layout>
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
                {/* Background Imaging */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        className="w-full h-full object-cover opacity-10 mix-blend-overlay scale-110"
                        alt="Background Art"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-onyx-dark via-transparent to-onyx-dark" />
                </div>

                {/* Visual Depth Layer: Mandalas & Gradients */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-bordeaux/20 rounded-full blur-[120px] opacity-40" />
                    <Mandala
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        size={800}
                        color="var(--gold)"
                        opacity={0.1}
                        animate
                        speed={100}
                    />
                    <Mandala
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        size={600}
                        color="var(--gold)"
                        opacity={0.05}
                        animate
                        speed={150}
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase">{t('hero.badge')}</span>
                    </div>

                    <Heading variant="h1">
                        {t('hero.title1')} <br />
                        <span className="text-gold italic font-display">{t('hero.title2')}</span>
                    </Heading>

                    <Text className="max-w-3xl mx-auto">
                        {t('hero.description')}
                    </Text>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                        <ShaktiButton size="lg">
                            {t('hero.cta')}
                        </ShaktiButton>
                        <button className="text-gold font-bold tracking-[0.2em] text-xs uppercase border-b border-gold/40 pb-1 hover:border-gold transition-all">
                            {t('hero.secondary_cta')}
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent" />
                </div>
            </section>

            <About />

            <Ornament className="py-12 opacity-40" />

            <Catalog />

            <section id="try" className="py-32 px-6 bg-onyx border-y border-gold/10 relative overflow-hidden">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/20 bg-gold/5">
                            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            <Text variant="detail" className="text-[10px]">{t('player.badge')}</Text>
                        </div>

                        <Heading variant="h2">
                            {t('player.title')} <span className="text-gold italic">{t('player.title_accent')}</span>
                        </Heading>

                        <Text>
                            {t('player.description')}
                        </Text>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                t('player.features.precision'),
                                t('player.features.breath'),
                                t('player.features.techniques'),
                                t('player.features.guidance')
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-4">
                                    <div className="w-5 h-px bg-gold/50" />
                                    <span className="text-cream/80 text-sm font-bold tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>

                        <ShaktiButton variant="outline" className="mt-4">
                            {t('player.cta')}
                        </ShaktiButton>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        {/* Decorative background for Video */}
                        <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full" />
                        <RubiPlayer
                            title={t('player.title_accent')}
                            thumbnailUrl={tryThumbnail}
                        />
                    </div>
                </div>
            </section>

            <Donation />

            <Ornament className="py-20 opacity-30" />
        </Layout>
    )
}

export default App
