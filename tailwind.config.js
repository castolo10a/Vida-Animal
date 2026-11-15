/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores del logo de Vida Animal
        magenta: {
          DEFAULT: '#e00d86',
          dark: '#b80a6e',
          soft: '#fde7f3',
        },
        lime: {
          DEFAULT: '#b9d700',
          dark: '#6b7d00',
          soft: '#f4f9d9',
        },
        cyan: {
          DEFAULT: '#7fd9e1',
          dark: '#1f8f99',
          soft: '#e8f8fa',
        },
        ink: {
          DEFAULT: '#1f2328',
          soft: '#4a5058',
          muted: '#6b7280',
        },
        cream: '#fffaf6',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(31, 35, 40, 0.18)',
        lift: '0 20px 40px -16px rgba(224, 13, 134, 0.35)',
      },
    },
  },
  plugins: [],
}
