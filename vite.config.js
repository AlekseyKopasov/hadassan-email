import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    // Решает проблему CORS для шрифтов
    headers: {
      'Access-Control-Allow-Origin': '*',
       'Content-Type': 'font/woff2'
    }
  },
});