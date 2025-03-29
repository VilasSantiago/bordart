/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        miFuente: ['MiFuente', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
