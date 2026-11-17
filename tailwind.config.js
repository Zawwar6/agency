export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080B12', navy: '#0B1020', brand: '#155EEF',
        tint: '#EAF2FF', sky: '#7CB5FF', muted: '#64748B', line: '#E5EAF2',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
}
