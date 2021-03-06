module.exports = {
  content: [
    './src/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mini: '375px',
      },
    },
    colors: {
      dark: '#282a37',
      light: '#f6f6f4',
      gray: {
        100: '#e1e1e1',
        300: '#B2B2B2',
        600: '#545454',
      },
    },
    borderColor: (theme) => ({
      DEFAULT: theme('colors.gray.100', 'currentColor'),
    }),
  },
  plugins: [],
};
