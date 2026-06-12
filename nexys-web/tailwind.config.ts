import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: "#350a03", bright: "#4a0f05", deep: "#240603" },
        ink: "#000000",
        paper: "#f4f3f0",
      },
    },
  },
  plugins: [],
};

export default config;
