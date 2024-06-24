/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quattrocento: ["Quattrocento", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      letterSpacing: {
        "20p": "0.2em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        wheat: "#EAD7B8",
        midnight: "#002E40",
        coral: "#F38266",
        skyblue: "#A9BFE2",
      },
    },
  },
  plugins: [],
};
