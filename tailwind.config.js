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

      },
      fontSize: {
        bigclamp: "clamp(1rem, 12vw, 6.5rem)",
        mediumclamp:"clamp(1rem, 17vw, 8rem)",
        smallclamp:"clamp(0.5rem, 6.1vw, 4rem )",
        tinyclamp:"clamp(0.5rem, 5vw, 2rem )",
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
