/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        // Define your custom colors
        'secondary-color': '#7e5bef',
        'brand-light': '#f2edfc',
        'primary-color': '#3d2c8d',
        'text-color': '#6262666',
      },

      boxShadow: {
        'soft-bottom': '0 4px 10px rgba(0, 0, 0, 0.02)', // Custom soft shadow
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.25)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.25)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.3)',
        'xl': '4px 4px 8px rgba(0, 0, 0, 0.55)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.35)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };

      addUtilities(newUtilities);
    }
  ],
};
