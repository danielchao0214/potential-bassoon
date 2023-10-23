/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "spin-50": "spin 50s linear infinite",
        "spin-60": "spin 60s linear infinite",
        "spin-70": "spin 70s linear infinite",
      },
    },
  },
  plugins: [],
};
