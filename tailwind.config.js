module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0070f3',
        'primary-accent': '#e30613',
        'primary': '#0096c7',
        'black-10': 'rgba(0,0,0,0.1)',
        'black-20': 'rgba(0,0,0,0.2)',
        'black-30': 'rgba(0,0,0,0.3)',
        'black-40': 'rgba(0,0,0,0.4)',
        'black-50': 'rgba(0,0,0,0.5)',
        'white-5': 'rgba(255,255,255,0.05)',
        'white-10': 'rgba(255,255,255,0.1)',
        'white-20': 'rgba(255,255,255,0.2)',
        'white-30': 'rgba(255,255,255,0.3)',
        'white-40': 'rgba(255,255,255,0.4)',
        'white-50': 'rgba(255,255,255,0.5)',
        'indigo-1': 'rebeccapurple'
      },
      borderColor: {
        'primary-accent': '#e30613',
      },
      textColor: {
        'primary-dark': '#0070f3',
        'primary-accent': '#e30613',
        'primary': '#0096c7',
      },

    },
  },
  plugins: [],
}
