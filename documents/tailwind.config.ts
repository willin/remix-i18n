import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import flowbite from 'flowbite/plugin';

export default {
  theme: {
    extend: {
      colors: {
        current: 'currentColor'
      }
    }
  },
  plugins: [typography, flowbite],
  content: ['./app/**/*.{js,jsx,ts,tsx}']
} satisfies Config;
