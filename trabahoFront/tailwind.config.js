/** @type {import('tailwindcss').Config} */
export const content = [
   './src/**/*.{js,jsx,ts,tsx}',
   './src/**/*.{js,jsx,ts,tsx}',
   'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
];
export const theme = {
   extend: {
      colors: {
         bleu: '#216869 ',
         gris: '#425154',
         blanc_creme: '#e5ece9',
         jade: '#59a96a',
         emeraude: '#28c27a ',
      },
      fontFamily: {
         sans: ['Graphik', 'sans-serif'],
         serif: ['Merriweather', 'serif'],
      },
      plugins: [require('flowbite/plugin')],
   },
};
export const plugins = [];
