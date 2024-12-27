/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: '768px',
        'custom': '780px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Ensures Tailwind resets styles properly
  },

  variants: {
    extend: {
      textDecoration: ["hover"], // Ensures hover effects are generated
    },
  },


};
