// tailwind.config.js
export default {
  content: [
    './app.vue',
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        ocrastd: ['"OCR A Std"', 'monospace'],
      },
      colors: {
        'pp-dark': '#00000f',
      },
    },
  },
  plugins: [],
}
