/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // General
        primary: "#35A4DC",
        secondary: "#17497C",
        blob: "#F0F4F9",

        // Siemens
        siemensPrimary: "#019997",
        siemensSecondary: "#FFFFFF",
        siemensBlob: "#F0F4F9",
        "siemens-bg": "#000028",
        "siemens-card-color": "#0B2849",

        // Bosch
        boschPrimary: "#F80000",
        boschSecondary: "#2D3033",
        boschBlob: "#F0F1F2",

        // Samsung
        samsungPrimary: "#000000",
        samsungSecondary: "#FFFFFF",
        samsungBlob: "#F7F7F7",

        // LG
        lgPrimary: "#A50034",
        lgSecondary: "#000000",
        lgBlob: "#F6F3EB",
        "lg-bg-light": "#F9F7F3",
        "lg-bg": "#F1ECE4",
        "lg-text": "#4a4946",

        // Additional
        darkBlue: "#062031",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
