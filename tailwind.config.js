/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FDFBF5',    /* Sandy beige / Off-white */
        'foreground': '#3A3F44',    /* Dark slate gray */
        'primary': '#6B8EAD',       /* Dusty blue */
        'accent': '#D97D54',        /* Terracotta/coral */
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}