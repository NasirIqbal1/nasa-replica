/** @type {import('tailwindcss').Config} */

const containerWidths = {
  "container-1873": "1873px",
  "container-1712": "1712px",
  "container-1600": "1600px",

  "container-1412": "1412px",
  "container-1400": "1400px",

  "container-1335": "1335px",
  "container-1318": "1318px",
  "container-1296": "1296px",
  "container-1200": "1200px",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        ...containerWidths,
      },
      width: {
        ...containerWidths,
      },

      flexGrow: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [],
};

