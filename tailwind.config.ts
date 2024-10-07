import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
       "primary-color":'#f56c51',
       "button-color":"#53d769",
       "info-color":"#2e4b9c",
       "dark-mode":'#1e1f20',
       "dark-light":'#1D232A',
       "modal":'rgb(55 65 81 / 0.7)'
      },
      fontFamily:{
        primary:'"Afacad Flux", sans-serif;',
        secondary:'"Poppins", sans-serif;'
      }
    },
  },
  plugins: [ require('daisyui')],
};
export default config;
