/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "body": "#131518",
        "rating": "#262E38",
        "orange": "#FC7614",
      },
      textColor: {
        "par": "#969FAD",
        "medium-grey": "#7C8798",
      },
      screens: {
        'sm': '460px',
      },
      fontSize: {
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
};
