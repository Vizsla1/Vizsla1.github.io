/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'csumb': '#112E51',
        'dark-mode':'#03001C',
        'trial': '#A9CEF4',
        'cool-white': '#EFF1F3',
      }
    }, //Add custom colors and fonts
  },
  plugins: [],
}
