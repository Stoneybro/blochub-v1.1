/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary':'#fff',
        'secondary':'#5347F6',
        'red':'#D75F46',
        'green':'#51D655',
      },
      fontFamily: {
        sans: ['var(--font-roobert)'],

      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
