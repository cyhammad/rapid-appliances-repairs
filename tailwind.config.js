/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "siemens-bg": "#000028",
        "siemens-card-color": "#0B2849",
        "lg-bg-light": "#F9F7F3",
        "lg-bg": "#F1ECE4",
        "lg-text": "#4a4946",
        darkBlue: "#062031",
      },
    },
  },
  plugins: [],
};
