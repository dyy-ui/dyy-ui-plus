import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import dts from 'vite-plugin-dts'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types',
    }),
    terser(),
  ],
  build: {
    outDir: 'dist/full',
    minify: true,
    cssCodeSplit: false, // 关闭 CSS 拆分
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, '../index.ts'),
      name: 'DyyUiPlus',
      fileName: 'full',
      formats: ['es'],
    },
    rollupOptions: {
      // 不要 external，确保依赖都被打包进来
      external: ['vue'],
      output: {
        entryFileNames: 'full.js',
        assetFileNames: 'full.[ext]',
      },
    },
  },
})
