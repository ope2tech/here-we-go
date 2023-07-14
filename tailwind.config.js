/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colours: {
 papayawhip: {
light: '#fef4ee4',
DEFAULT: '#ffefds',
dark: '#fee5bc',
        } 
      },
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio: 13/20)'},
        },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
         },  
      },
      animation: {
        'open-menu': 'opem-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

