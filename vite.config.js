import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import sassGlobImports from 'vite-plugin-sass-glob-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), sassGlobImports()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "sass:math";
        @import "src/styles/utils/utils.scss";
        `,
      },
    },
  },
})
