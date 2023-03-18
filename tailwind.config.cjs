/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/**/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC3E22',
        'primary-dark': '#B7280F',
        'primary-btn': '#A8B64F',
        'hover-btn': 'rgba(137, 148, 65, 1)',
        'text-primary-color': '#333',
        'text-placeholder': '#999',
        'bg-f4': '#F4F4F4',
        'color-e4': '#E4E4E4',
        'color-c4': '#C4C4C4',
        'focus-bg': '#FFDDA9',
        'pause-time-bg': '#DFDCFE',
        'stops-bg': '#C5F1FF'
      },
      spacing: {
        '10%': '10%'
      },
      fontSize: {
        '64px': '64px'
      },
      lineHeight: {
        '77px': '77px'
      },
      keyframes: {
        mount: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        mount: 'wiggle .3s ease-in-out'
      }
    }
  },
  plugins: []
}
