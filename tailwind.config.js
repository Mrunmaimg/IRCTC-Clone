/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A56DB',
          50: '#E6EEFD',
          100: '#CCDDFB',
          200: '#99BBF7',
          300: '#6699F3',
          400: '#3377EF',
          500: '#1A56DB',
          600: '#1444AF',
          700: '#0F3383',
          800: '#0A2257',
          900: '#05112B',
        },
        'light-bg': {
          primary: '#FFFFFF',
          secondary: '#F3F4F6',
        },
        'dark-bg': {
          primary: '#111827',
          secondary: '#1F2937',
        },
        'light-text': {
          primary: '#111827',
          muted: '#6B7280',
        },
        'dark-text': {
          primary: '#F9FAFB',
          muted: '#9CA3AF',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
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
} 