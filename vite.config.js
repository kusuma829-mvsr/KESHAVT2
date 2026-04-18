import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';

export default defineConfig({
  plugins: [nunjucks()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.njk',
        contact: 'contact.njk'
      }
    }
  }
});