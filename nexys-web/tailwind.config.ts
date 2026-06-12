import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: "#7a1020", bright: "#9c2030", deep: "#5a0b18" },
        ink: "#000000",
        paper: "#f4f3f0",
      },
    },
  },
  plugins: [],
};

export default config;
