import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#205BF1",
      secondary: "#F12052",
      green: "#25A18E",
      gray: {
        100: "#F5F8FF",
        200: "#AFAFAF",
        500: "#989DA8",
        700: "#404040",
      },
      light: "#FFFFFF",
      dark: "#1F2025",
      none: "#00000000",
    },
    boxShadow: {
      "shadow-dark": "0 0 39px 0 rgba(22, 23, 27, .5)",
      "shadow-light": "0 0 40px 0 #FFFFFF20",
      "shadow-secondary": "0 0 15px 0 #F12052",
      none: "0 0 rgba(0,0,0,0)",
    },
    borderColor: {
      light: "#464646",
      white: "#FFFFFF25",
      secondary: "#F1205290",
    },
    extend: {
      backgroundImage: {
        box: "linear-gradient(145deg, rgba(58,59,64,1) 0%, rgba(31,32,37,1) 88%)",
      },
    },
  },
  plugins: [],
};
export default config;
