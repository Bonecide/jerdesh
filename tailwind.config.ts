import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C7CE2",
        accent: "#FF7E36",
      },
    },
  },
  plugins: [],
};
export default config;
