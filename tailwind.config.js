/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aegis-bg': '#050A14',
        'aegis-nav': '#081321',
        'aegis-surface': '#0A1A2F',
        'aegis-primary': '#006FCF',
        'aegis-accent': '#635BFF',
        'aegis-text': '#F8FAFC',
        'aegis-muted': '#64748B',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        // 3D Layered Shadows
        'recessed': 'inset 0 2px 4px rgba(0,0,0,0.5)',
        'card': '0 2px 4px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.3)',
        'hover': '0 4px 8px rgba(0,111,207,0.05), 0 12px 24px rgba(0,0,0,0.4)',
        'modal': '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.32, 0.72, 0, 1)',
      }
    }
  },
  plugins: [],
}
