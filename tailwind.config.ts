import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        signature: '#4b4ded',
        signature2: '#7879f1',
        signature3: '#a5a6f6',
        signature4: '#efeffd',
        // signature: '#075ce4'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '1.1rem',
            maxWidth: 'none',
            h1: {
              fontSize: '1.8rem',
              marginTop: '4rem',
              paddingBottom: '1rem',
              borderBottom: '1.2px solid #D1D1D1'
            },
            h2: {
              marginTop: '2rem',
            },
            'h1,h2,h3,h4': {
              'scroll-margin-top': theme('spacing.32'),
            },
            code: {
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
              backgroundColor: theme('colors.gray.100'),
              color: '#4b4ded',
              fontWeight: '550',
              padding: theme('spacing.1'),
              borderRadius: theme('borderRadius.DEFAULT'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
