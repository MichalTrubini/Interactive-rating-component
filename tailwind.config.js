/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "body": "#131518",
        "rating": "#262E38"
      },
      textColor: {
        "par": "#969FAD",
        "medium-grey": "#7C8798",
      },
    },
  },
  plugins: [],
};
