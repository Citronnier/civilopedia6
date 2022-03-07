import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		manifest: true,
		rollupOptions: {
			input: './src/server/index.js'
		}
	},
	plugins: [vue()],
	 resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/client', import.meta.url))
    }
  }
})
