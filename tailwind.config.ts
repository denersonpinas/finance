import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      emerald: {
        '50': '#ebfef3',
        '100': '#d0fbe1',
        '200': '#a4f6c7',
        '300': '#6aebab',
        '400': '#2ed989',
        '500': '#0abd6f',
        '600': '#009b5b',
        '700': '#007c4c',
        '800': '#03623d',
        '900': '#035134',
        '950': '#012d1e'
      },
      'off-white': '#F4F4F4',
      'light-gray': '#EBEBEB',
      text: '#716D73',
      'text-force': '#4B4B4B'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
