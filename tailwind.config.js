/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm paper background + surfaces — light, clean, minimal
        paper: '#FAF8F3',
        surface: '#FFFFFF',
        line: '#E8E4DB',
        ink: {
          900: '#1B2B27',
          700: '#33443F',
          500: '#5B6B66',
        },
        muted: '#7A8A84',
        // Calm green / teal accent system
        teal: {
          DEFAULT: '#2F6F62',
          dark: '#205046',
          light: '#DCE8E1',
        },
        sage: '#8FAE9C',
        clay: '#C08552',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(27,43,39,0.04), 0 8px 24px rgba(27,43,39,0.06)',
        'soft-lg': '0 4px 12px rgba(27,43,39,0.06), 0 16px 40px rgba(27,43,39,0.08)',
      },
    },
  },
  plugins: [],
}
