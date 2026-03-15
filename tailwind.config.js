/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./context/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // System Architect palette
        navy: {
          900: '#0a192f',
          800: '#112240',
          700: '#1d3461',
          600: '#233554'
        },
        slate: {
          400: '#8892b0',
          300: '#a8b2d1',
          200: '#ccd6f6'
        },
        cyan: {
          400: '#64ffda',
          500: '#00d9ff',
          600: '#00bcd4'
        },
        // Light mode
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
          text: {
            primary: '#0f172a',
            secondary: '#475569',
            tertiary: '#64748b'
          }
        },
        // Dark mode (architect theme)
        dark: {
          bg: '#0a192f',
          card: '#112240',
          elevated: '#1d3461',
          border: '#233554',
          text: {
            primary: '#ccd6f6',
            secondary: '#8892b0',
            tertiary: '#64748b'
          }
        },
        accent: '#64ffda'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'monospace']
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(100, 255, 218, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(100, 255, 218, 0.03) 1px, transparent 1px)
        `,
        'grid-pattern-light': `
          linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
        `
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
}
