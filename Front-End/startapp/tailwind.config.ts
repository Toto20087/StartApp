import type { Config } from 'tailwindcss'
// import { Poppins } from "@next/font/google"

// let pins = Poppins({
//   subsets: ["latin"],
//   weight: "400",
// });
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      tightest: '-0.05em',
      tighter: '-0.04em',
      tight: '-0.03em',
      normal: '0',
      wide: '0.03em',
      wider: '0.04em',
      widest: '0.25em',
    },
    fontFamily: {
      nunito: 'Nunito, sans-serif',
      poppins: 'Poppins, sans-serif'
    },
    fontSize: {
      xs: '0.60rem',
      sm: '0.70rem',
      base: '0.8rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
      "colors": {
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'white': '#ffffff',
        'black': '#000000',
        'violet': '#260E39',
        'darker-purple': '#3902BA',
        "purple": {
          50: "#3E6C8C",
          100: "#D9C8FE",
          200: "#B08CFD",
          300: "#8A55FC",
          400: "#641EFB",
          500: "#4704D7",
          600: "#35039F",
          700: "#280278",
          800: "#1A0250",
          900: "#0D0128",
          950: "#070014"
        },
        "gray": {
          50: "#B5B2B2",
          100: "#415771",
          200: "#3A4D64",
          300: "#304154",
          400: "#273444",
          500: "#212D3A",
          600: "#1A232D",
          700: "#141B24",
          800: "#0D1117",
          900: "#070A0D",
          950: "#040506"
        }
      },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
