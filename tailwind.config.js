/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "body": "#131518",
        "rating": "#262E38",
        "orange": "#FC7614",
        "medium-grey": "#7C8798",
      },
      textColor: {
        "light-grey": "#969FAD",
        "medium-grey": "#7C8798",
        "orange": "#FC7614",
      },
      screens: {
        'sm': '460px',
      },
      fontSize: {
        'medium': '0.95rem',
        '3xl': '1.75rem',
      },
      maxWidth: {
        'md': '412px',
      }
    },
  },
  plugins: [],
};
