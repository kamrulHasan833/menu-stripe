/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        standard: "67.5rem",
      },
      colors: {
        "title-color": "#0a2540",
        "desc-color": "#4f5b76",
        "icon-color": "#88add2",
        "bg-secondary": "#EFF3F9",
      },
    },
  },
  plugins: [],
};
