import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        una: {
          red: "#BA1A1A",
          "red-dark": "#93000A",
          "red-soft": "rgba(186, 26, 26, 0.08)",
          blue: "#071526",
          "blue-dark": "#030A14",
          "blue-light": "#1E3A8A",
          "blue-soft": "rgba(30, 58, 138, 0.08)",
          gold: "#D97706",
          cream: "#FAF8FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-roboto)", "Roboto", "sans-serif"],
      },
      boxShadow: {
        dropdown: "0 15px 35px rgba(7, 21, 38, 0.16), 0 5px 15px rgba(0, 0, 0, 0.08)",
        drawer: "-8px 0 40px rgba(0, 0, 0, 0.35)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
