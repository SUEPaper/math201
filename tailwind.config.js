/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    container: {
      padding: '2rem',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
