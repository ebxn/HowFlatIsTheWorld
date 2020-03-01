const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      scale: {
        25: '0.25'
      },
      spacing: {
        26: '6.5rem',
        82: '24rem',
        '1/2': '50%'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
