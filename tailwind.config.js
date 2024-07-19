/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(to bottom, hsl(252, 100%, 67%) 0%, hsl(241, 81%, 54%) 100%)',
        'gradient-circle': 'linear-gradient(to bottom, hsla(256, 72%, 46%, 1) 0%, hsla(241, 72%, 46%, 0) 100%)',
      },
      colors: {
        primary: {
          red: "hsl(0, 100%, 67%)",
          yellow: "hsl(39, 100%, 56%)",
          green: "hsl(166, 100%, 37%)",
          blue: " hsl(234, 85%, 45%)",
        },
        n: {
          "white": "hsl(0, 0%, 100%)",
          "pale-blue": "hsl(221, 100%, 96%)",
          "lavendar": "hsl(241, 100%, 89%)",
          "gray-blue": "hsl(224, 30%, 27%)",
        },
      },
    },
  },
  plugins: [],
};
