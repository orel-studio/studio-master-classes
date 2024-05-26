import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' && process.env.VITE_ENV === 'test'
    ? '/studio-master-classes/test/'
    : '/studio-master-classes/',
});