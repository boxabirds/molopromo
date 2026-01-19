import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          light: '#2B4A73',
          dark: '#152C47',
        },
        secondary: {
          DEFAULT: '#2A9D8F',
          light: '#3AB8A8',
          dark: '#1F7A6F',
        },
        accent: {
          DEFAULT: '#E76F51',
          light: '#ED8B72',
          dark: '#D15A3D',
        },
        neutral: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          dark: '#4B5563',
        },
        cream: '#FEFCF3',
        warmGray: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          200: '#E8E4DE',
          300: '#D4CEC4',
          400: '#B8AFA3',
          500: '#9C9183',
          600: '#7A6F62',
          700: '#5C5347',
          800: '#3D372F',
          900: '#1F1B17',
        },
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
