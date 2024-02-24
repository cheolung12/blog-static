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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '1.125rem',
            maxWidth: 'none',
            h1: {
              fontSize: '2rem',
              marginTop: '1rem'
            },
            code: {
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.red.500'),
              fontWeight: '400',
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
