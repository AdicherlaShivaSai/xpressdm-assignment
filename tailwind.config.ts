/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#FF5F2D",
        primary2: "#BF35FF",
        secondary: "#060B13",
        tertiary: "#FFFFFF",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg,#FF5F2D 0%, #BF35FF 100%)",
      },
    },
  },
  plugins: [],
};
