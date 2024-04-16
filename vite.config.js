import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/001-setting-up-your-first-react-app/",
  plugins: [react()],
})
