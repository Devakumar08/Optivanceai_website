/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E3F8FF',
          100: '#B3ECFF',
          200: '#81DFFF',
          300: '#4FD2FF',
          400: '#26C6FF',
          500: '#00BAFF',
          600: '#00A3E6',
          700: '#0089CC',
          800: '#0070B3',
          900: '#004680',
        },
        secondary: {
          50: '#E6FCFF',
          100: '#BFF8FF',
          200: '#99F3FF',
          300: '#5BEBFF',
          400: '#33E0FF',
          500: '#00E5FF', // Neon cyan
          600: '#00C7DF',
          700: '#00A8BF',
          800: '#00889F',
          900: '#006A7F',
        },
        dark: {
          50: '#E3E5E8',
          100: '#C7CBD2',
          200: '#ABB1BC',
          300: '#8F97A6',
          400: '#737D90',
          500: '#5A657A',
          600: '#434C61',
          700: '#2C3347',
          800: '#151A2E',
          900: '#0A1929', // Deep blue
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};