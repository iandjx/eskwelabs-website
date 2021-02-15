module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        logo: "url('/images/logos/logo-bg.png')",
      }),
    },
    colors: {
      transparent: 'transparent',
      white: {
        DEFAULT: '#fff',
        lilac: '#F8F9FC',
      },
      black: '#000',
      red: {
        lightest: '#ffb9b9',
        lighter: '#ff7979',
        DEFAULT: '#e74c3c',
        darker: '#c0392b',
      },
      gallery: {
        white: '#F0F0F0',
        'off-white': '#EEEEEE',
      },
      'athens-gray': '#EBECEE',
      mercury: '#E7E7E7',
      silver: '#BDBDBD',
      tundora: '#434040',
      zircon: '#F9FAFF',
      mischka: '#DFE0E6',
      terracotta: {
        200: '#f1c5b1',
        lighter: '#e69a78',
        DEFAULT: '#DE7A4D',
        darker: '#C6673C',
      },
      tradewind: {
        lighter: '#76beb7',
        DEFAULT: '#53AEA5',
        darker: '#428c85',
      },
      'winter-hazel': {
        lighter: '#e7e7c1',
        DEFAULT: '#D9D99C',
        darker: '#cbcb77',
      },
      'bermuda-gray': '#7287A4',
      'pickled-bluewood': {
        lighter: '#485c85',
        DEFAULT: '#364564',
        darker: '#242e43',
        darkest: '#28344E',
      },
      'wild-blue-yonder': {
        200: '#dce3ec',
        lighter: '#9aaec8',
        DEFAULT: '#7993B6',
        darker: '#5979a3',
      },
      cerulean: '#0E9BE4',
      'pixie-green': {
        100: '#f1f8f1',
        200: '#e0efe0',
        lighter: '#cfe7d0',
        DEFAULT: '#ADD6AE',
        darker: '#8bc58c',
      },
      'hit-pink': {
        lighter: '#ffc5a9',
        DEFAULT: '#FFA376',
        darker: '#ff8143',
      },
      deluge: {
        lighter: '#9286b9',
        DEFAULT: '#7566A6',
        darker: '#5d5089',
      },
      polar: {
        DEFAULT: '#E1F8F6',
      },
      'twitter-blue': '#6AC5EE',
      'facebook-blue': {
        DEFAULT: '#3b5998',
        darker: '#2f477a',
      },
      'google-red': {
        DEFAULT: '#de5246',
        darker: '#c63023',
      },
    },
    stroke: (theme) => ({
      current: 'currentColor',
      'pickled-bluewood': theme('colors.pickled-bluewood'),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
