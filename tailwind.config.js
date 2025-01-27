/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: " 'Poppins', sans-serif",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      animation: {
        'shiny-text': 'shiny-text 8s infinite',
        'fade-in': 'fade-in 1s ease-in-out',
      },
      keyframes: {
        'shiny-text': {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shiny-width)) 0',
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shiny-width)) 0',
          },
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
      },
      backgroundImage: {
        'noise-pattern': "url('/bgNoise.png')",
        'hero-pattern': "url('/hero-background.webp')",
        'grid-pattern': "url('/about-us.webp')",
        'hero-gradient':"linear-gradient(176deg, #3B3B3B -32.99%, #242424 14.13%, #000 88.3%), linear-gradient(176deg, #00849C -32.99%, #003A44 19.73%, #000 83.54%)",
        'hero-cta-gradient':
          'linear-gradient(46deg, #8639F8 16.25%, #8F3CF4 27%, #A947EB 46.55%, #D359DD 70%, #F768D1 87.59%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'testimonial-gradient': 'linear-gradient(260deg, #8C88FF 4.95%, #1911B3 167.68%)',
        'black-gradient':'linear-gradient(176deg, #3B3B3B -32.99%, #242424 14.13%, #000 88.3%);'
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwindcss-gradients'),
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          'scrollbar-width': 'none' /* Firefox */,
          '-ms-overflow-style': 'none' /* IE 10+ */,
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none' /* Chrome, Safari, Edge */,
        },
      })
    },
  ],
}
