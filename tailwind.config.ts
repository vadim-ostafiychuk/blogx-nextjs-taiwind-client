import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: [
        "var(--font-source-roboto)",
        "sans-serif",
        "ui-sans-serif",
        "system-ui",
      ],
    },
    extend: {
      gridTemplateRows: {
        "auto-fr-auto": "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
export default config;
