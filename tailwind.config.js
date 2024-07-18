/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        // Background
        GradientLightSlateBlue: "hsl(252, 100%, 67%)",
        GradientLightRoyalBlue: "hsl(241, 81%, 54%)",
        // Circle
        GradientVioletBlue: "hsla(256, 72%, 46%, 1)",
        GradientPersianBlue: "hsla(241, 72%, 46%, 0)",
      },
      color: {
        primary: {
          red: "hsl(0, 100%, 67%)",
          yellow: "hsl(39, 100%, 56%)",
          green: "hsl(166, 100%, 37%)",
          blue: " hsl(234, 85%, 45%)",
        },
        n: {
          white: "hsl(0, 0%, 100%)",
          "pale-blue": "hsl(221, 100%, 96%)",
          lavendar: "hsl(241, 100%, 89%)",
          "gray-blue": "hsl(224, 30%, 27%)",
        },
      },
    },
  },
  plugins: [],
};
