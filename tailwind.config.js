/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'teal-primary': '#2d7a6e',
        'teal-light': '#4a9b8e',
        'teal-dark': '#1e5449',
        'teal-50': '#f0f7f6',
        'teal-100': '#d9ebe8',
        'teal-200': '#b3d7d1',
        'teal-300': '#8cc3ba',
        'teal-400': '#5fa89d',
        'teal-500': '#3d8b7e',
        'teal-600': '#2d7a6e',
        'teal-700': '#256356',
        'teal-800': '#1e5449',
        'teal-900': '#17453c',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'neon-blue': '0 0 15px rgba(45, 122, 110, 0.3)',
        'neon-purple': '0 0 15px rgba(45, 122, 110, 0.3)',
        'neon-pink': '0 0 15px rgba(45, 122, 110, 0.3)',
        'neon-teal': '0 0 15px rgba(45, 122, 110, 0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(45, 122, 110, 0.3)' },
          '100%': { boxShadow: '0 0 15px rgba(45, 122, 110, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
