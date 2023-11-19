/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    primary: "#1C8D76",
    secondary: "F1F0E8",
    neutral: "CCC8AA",
    danger: "D83F31",
    gray: "#2B2B2B",
    dem: "#C3C5C9",
    extend: {},
  },
  themes: [],
  plugins: [require("daisyui")],
};
