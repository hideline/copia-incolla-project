/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',

      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}

