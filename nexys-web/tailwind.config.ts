import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: "#E60012", bright: "#ff2235", deep: "#b3000e" },
        ink: "#000000",
        paper: "#f4f3f0",
      },
    },
  },
  plugins: [],
};

export default config;
