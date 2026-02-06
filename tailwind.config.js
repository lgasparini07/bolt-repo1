/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#1a1a1a',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          900: '#164e63',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'slideUp': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
