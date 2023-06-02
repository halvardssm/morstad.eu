import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
  darkMode: "class",
  safelist: [
    {
      pattern: /(bg|text|border)-(.*)-(\d{1}0{1,2})/,
    },
  ],
};
