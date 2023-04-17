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
        'primary-dark-invert': '#47c3d9',
        'primary-btn': '#A8B64F',
        'primary-btn-invert': '#21262d',
        'hover-btn': 'rgba(137, 148, 65, 1)',
        'hover-btn-invert': '#30363d',
        'text-primary-color': '#333',
        'primary-color-invert': '#e6edf3',
        'text-placeholder': '#999',
        'placeholder-invert': '#6D7681',
        'bg-f4': '#F4F4F4',
        'bg-f4-invert': '#0b0b0b',
        'color-e4': '#E4E4E4',
        'color-c4': '#C4C4C4',
        'color-c4-invert': '#3b3b3b',
        'focus-bg': '#FFDDA9',
        'pause-time-bg': '#DFDCFE',
        'stops-bg': '#C5F1FF',
        'bg-dark': '#161b22',
        'bg-dark-header': '#0E1117',
        'bg-input-dark': '#010409',
        'bg-dropdown-dark': '#0F1117'
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
