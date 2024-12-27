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
      },
      backgroundImage: {
        'custom-radial': `
          radial-gradient(at 30% 43%, #0A1026 0%, transparent 60%), 
          radial-gradient(at 73% 25%, #01C979 0%, transparent 30%), 
          radial-gradient(at 13% 78%, #01C979 0%, transparent 40%), 
          radial-gradient(at 58% 16%, #01C979 0%, transparent 30%)
        `,
      },
    }
  },

  plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
