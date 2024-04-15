/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./main.js",
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
    [require("daisyui")],
  ]
}

