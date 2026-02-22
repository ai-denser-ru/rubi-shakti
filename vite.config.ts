import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/rubi-shakti/', // Required for GitHub Pages project site https://<user>.github.io/<repo>/
})
