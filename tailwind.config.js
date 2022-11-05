const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                // sans: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
                coolvetica: ["Coolvetica", "sans-serif"],
                coolvetica_italic: ["CoolveticaItalic", "sans-serif"],
                evolve_thin: ["EvolveThin", "sans-serif"],
                evolve_light: ["EvolveLight", "sans-serif"],
                evolve_regular: ["EvolveRegular", "sans-serif"],
                evolve_medium: ["EvolveMedium", "sans-serif"],
                evolve_bold: ["EvolveBold", "sans-serif"],
                montserrat_bold: ["MontserratBold", "sans-serif"],
                montserrat_regular: ["MontserratRegular", "sans-serif"],
            },
        },
    },

    daisyui: {
        themes: [
          {
            mytheme: {
              primary: "#fe6601",
              secondary: "#1d5191",
              accent: "#292929",
              neutral: "#bcbcbc",
              "base-100": "#ffffff",
            },
          },
        ],
      },

    plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
