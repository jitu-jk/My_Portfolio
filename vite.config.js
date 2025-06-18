// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
   

// base: process.env.NODE_ENV === 'production'
//   ? '/My_Portfolio/'  // for GitHub Pages
//   : '/',              // for local & Vercel

//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/My_Portfolio/', // ✅ detects Vercel or GitHub
  plugins: [react()],
})
