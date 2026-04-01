/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'giolab-blue': '#1a56db',
        'giolab-blue-dark': '#1340a8',
        'giolab-orange': '#f97316',
        'giolab-orange-dark': '#ea580c',
        'giolab-gray': '#f8f9fa',
        'giolab-dark': '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
