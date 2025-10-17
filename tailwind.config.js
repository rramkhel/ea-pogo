/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pogo: {
          orange: '#FF6B35',
          yellow: '#FFB627',
          teal: '#95E1D3',
          darkBlue: '#1a1a2e',
          navy: '#16213e',
        },
      },
    },
  },
  plugins: [],
}
