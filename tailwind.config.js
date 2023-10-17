/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#39d3af",

          secondary: "#c9f5ff",

          accent: "#eaa74f",

          neutral: "#1e1424",

          "base-100": "#fcfcfc",

          info: "#51bad6",

          success: "#117860",

          warning: "#f7c94b",

          error: "#f8382a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
