/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      extend: {
          colors: {
              'coal-100': '#3b525f',
              'coal-200': '#0c2d42',
              'marine-100': '#7596a6',
              'marine-200': '#3195f9',
              'marine-300': '#29f2ff',
              'lime-100': '#cfff01',
              'lime-200': '#feca00',
          },
      },
  },
  plugins: [],
}

