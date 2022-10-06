/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        creme: "#F7C892",
        orange: "#FF6434",
        lilla: "#6432C9",
        lyslilla: "#E1CDFF",
        brun: "#A06E29",
        lyscreme: "#E8E1D1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
