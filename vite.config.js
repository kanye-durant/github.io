import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        help: resolve(__dirname, 'help.html'),
        tougao: resolve(__dirname, 'tougao.html'),
        sanwen: resolve(__dirname, 'sanwen.html'),
        category: resolve(__dirname, 'category.html'),
        article: resolve(__dirname, 'article.html'),
        author: resolve(__dirname, 'author.html'),
        search: resolve(__dirname, 'search.html'),
        column: resolve(__dirname, 'column.html'),
        'column-more': resolve(__dirname, 'column-more.html')
      }
    }
  }
})