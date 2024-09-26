/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#6b7280",
        primaryColour: "#5eead4",
        applegreen: "#eff1ef",
        offwhite: "#fafdfa",
        offblack: "#1a1b1b",
        fitbitgrey: "#565F5D",
      },
    },
  },
  plugins: [],
};
