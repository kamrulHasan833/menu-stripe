/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      mds: "820px",

      lgs: "900px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      maxWidth: {
        standard: "67.5rem",
      },
      colors: {
        "title-color": "#0a2540",
        "item-title-color": "#727f96",
        "desc-color": "#4f5b76",
        "icon-color": "#88add2",
        "bg-secondary": "#EFF3F9",
        "mobile-menu-item-color": "#3f4b66",
      },
    },
  },
  plugins: [],
};
