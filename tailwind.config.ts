import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'lordran-green': '#01C979',
        'lordran-blue': '#0A1026'
      }
    }
  },

  plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
