/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "1px", max: "970px" },
      lg: { min: "971px" },
    },
  },
  plugins: [],
};
