/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Nature palette extracted from profile photo
        forest: {
          deep:  "#0f1a14",
          mid:   "#14281c",
          green: "#3d6b4f",
          leaf:  "#6bad78",
        },
        sky: {
          blue:  "#7cb9e8",
          light: "#a8c8e8",
        },
        nature: {
          white: "#e8ede4",
        },
      },
    },
  },
  plugins: [],
};
