/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure Tailwind processes all your JSX files
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#333',
        lightBackground: '#fff',
        darkText: '#fff',
        lightText: '#000',
        darkButton: '#444',
        lightButton: '#007bff',
      },
    },
  },
  plugins: [],
}
