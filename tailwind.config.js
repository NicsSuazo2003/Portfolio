/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBFAF7',
          100: '#F6F4EE',
          200: '#EDEAE1',
          300: '#E2DED2',
        },
        ink: {
          DEFAULT: '#1C1B19',
          soft: '#3A3833',
          muted: '#6B675E',
          faint: '#9A958A',
        },
        accent: {
          DEFAULT: '#A8553F',
          soft: '#B86A52',
          deep: '#8C4634',
          tint: '#E8D9D1',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'tight-2': '-0.02em',
        'wide-2': '0.08em',
        'wide-3': '0.14em',
        'wide-4': '0.22em',
      },
      lineHeight: {
        'relaxed-2': '1.75',
      },
      maxWidth: {
        'content': '64rem',
        'prose-2': '40rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'line-grow': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 1.2s ease forwards',
        'line-grow': 'line-grow 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
