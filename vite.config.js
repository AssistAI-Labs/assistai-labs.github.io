import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),Vue(),Sitemap({hostname : 'https://assistai-labs.github.io', readable: true,externalSitemaps: ['https://assistai-labs.github.io/sitemap.xml']})],
  
})
