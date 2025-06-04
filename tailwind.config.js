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
  satisfies:[
    'bg-black',
    'bg-white',
    'bg-red-500',
    'bg-blue-500',
    'bg-green-600',
    'bg-yellow-400',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
