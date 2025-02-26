// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",

//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "primary-gray": "#F3F1F5",
//         "secondary-gray": "#AAAAAA",
//       },
//     },
//   },
//   plugins: [require("tailwind-scrollbar")({ nocompatible: true })],


  
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ Enable dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray": "#F3F1F5",
        "secondary-gray": "#AAAAAA",
        "dark-bg": "#1a1a2e", // Dark mode background
        "dark-text": "#ffffff", // Dark mode text
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
