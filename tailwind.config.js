/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'delektheme':'#1F2022'
      },
      height: {
        'delekheight': 'calc(100vh - 80px)', // Assuming your navbar height is 60px
      },
    },
  },
  plugins: [],
};
