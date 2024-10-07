/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryRed: "#FF0000",
        secondaryRed: "#CC0000",
        textColor: "#5F2727",
        darkBackground: "#111111",
        whiteBackground: "#FCFCFD",
        redBackground: "#530000",
      },
    },
  },
  plugins: [],
};
