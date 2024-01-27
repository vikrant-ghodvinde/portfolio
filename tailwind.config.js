/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #8800FF, #7E22CE)"
      },
      colors: {
        dark: "#1d1d1d",
        "secondary-dark": "#212425",
        "heavy-dark": "#0d0d0d",
      },
      spacing: {
        34: "136px",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
