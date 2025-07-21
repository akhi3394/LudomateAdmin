/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'font-poppins', // Prevent purging of this class
  ],
  theme: {
    extend: {
      colors: {
        'app-bg': 'var(--app-bg)',
        'sidebar-header-bg': 'var(--sidebar-header-bg)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}