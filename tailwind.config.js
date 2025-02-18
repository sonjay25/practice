/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shooting: {
          "0%": { transform: "translateX(100vw) translateY(-50vh)", opacity: "1" },
          "100%": { transform: "translateX(-10vw) translateY(50vh)", opacity: "0" },
        },
      },
      animation: {
        shooting: "shooting 3s linear infinite",
      },
    },
  },
  plugins: [],
};
