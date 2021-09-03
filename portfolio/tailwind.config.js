module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/hero.jpg')"
      }),
      height: theme => ({
        'screen/30': '30vh',
        'screen/40': '40vh',
        'screen/50': '50vh',
        'screen/60': '60vh'
      }),
      width: {
        '9/10': '90%'
      },
      screens: {
        'xs': '480px',
      },
      colors: {
        'cwu': '#ab0032'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
