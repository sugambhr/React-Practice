import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})


// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class", // Enables dark mode using a "class"
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Scan files for Tailwind classes
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     tailwindcss(),
//     react(),
//   ],
// };