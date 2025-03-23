/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#213d77',
        secondary: '#f2f2f2',
        accent: '#ff6b6b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 