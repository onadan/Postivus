/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#B9FF66",
        dark: "#191A23",
        light: "#f3f3f3",
      },
      screens: {
        xs: "320px",
        sm: "481px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
