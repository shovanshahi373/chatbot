/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        topbar: 'var(--topbar-height)',
        contentHeight: 'calc(.95 * calc(100vh - var(--topbar-height)))',
        chatHeight: 'calc(.95 * calc(100vh - calc(2 * var(--topbar-height))))',
      },
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Lexend', 'serif'],
    },
    colors: {
      primary: 'var(--purple)',
      secondary: 'var(--blue)',
      white: 'var(--white)',
      black: 'var(--black)',
      'off-white': 'var(--off-white)',
      'light-blue': 'var(--light-blue)',
      red: 'var(--red)',
      text: {
        light: 'var(--grey)',
        dark: 'var(--text-grey)',
      },
      alpha: {
        grey: 'var(--alpha-grey)',
      },
      bg: {
        dark: 'var(--background-grey)',
      },
      transparent: {
        0: 'rgba(0,0,0,0)',
        50: 'rgba(0,0,0,.5)',
      },
    },
  },
  plugins: [],
};

// #DDF3FF
