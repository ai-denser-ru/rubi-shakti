/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bordeaux: {
                    DEFAULT: '#4A0414',
                    light: '#6B061D',
                    dark: '#2D020C',
                },
                gold: {
                    DEFAULT: '#C5A059',
                    light: '#D4B87D',
                    dark: '#A6833E',
                },
                onyx: {
                    DEFAULT: '#121212',
                    light: '#242424',
                    dark: '#000000',
                },
                cream: {
                    DEFAULT: '#FDFCF0',
                    dark: '#F2EFD9',
                },
                spineGlow: '#FFD700',
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            spacing: {
                '8px': '8px',
                'safe': 'env(safe-area-inset-bottom)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'shakti-gradient': 'linear-gradient(to bottom, #121212, #4A0414)',
            }
        },
    },
    plugins: [],
}
