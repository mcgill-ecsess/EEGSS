/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.html",
    "./**/*.js",
  ],
  darkMode: 'media', // Use system preference for dark mode
  theme: {
    extend: {
      colors: {
        // Brand color palette
        brand: {
          50: "#e8f0f8",
          100: "#c6d9f2",
          200: "#a4c1eb",
          300: "#82aae5",
          400: "#6092de",
          500: "#3e7bd8", // Main Brand Color
          600: "#3262ad",
          700: "#254982",
          800: "#193157",
          900: "#0c182c",
        },
        // Semantic colors
        foreground: {
          DEFAULT: 'var(--foreground)',
        },
        background: {
          DEFAULT: 'var(--background)',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        'pulse-slower': 'pulseSlower 8s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        pulseSlow: {
          '0%, 100%': {
            opacity: '0.3',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        pulseSlower: {
          '0%, 100%': {
            opacity: '0.2',
          },
          '50%': {
            opacity: '0.4',
          },
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 4px 16px rgba(62, 123, 216, 0.08)',
        'soft-lg': '0 8px 32px rgba(62, 123, 216, 0.12)',
        'soft-xl': '0 20px 48px rgba(62, 123, 216, 0.2)',
        'glow': '0 0 20px rgba(62, 123, 216, 0.5)',
        'glow-lg': '0 0 40px rgba(62, 123, 216, 0.6)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '2000': '2000ms',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: {
              color: '#3e7bd8',
              '&:hover': {
                color: '#6092de',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}