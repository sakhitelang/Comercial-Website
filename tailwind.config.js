/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'steel-gray': '#2F2F2F',
        'warm-beige': '#F5EBDD',
        'industrial-orange': '#E67E22',
        'charcoal': '#1C1C1C',
        'amber-warm': '#D4A853',
        'rust': '#C0392B',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'industrial-gradient': 'linear-gradient(135deg, #1C1C1C 0%, #2F2F2F 50%, #3D3D3D 100%)',
      },
    },
  },
  plugins: [],
};
