import { defineConfig } from "vite";
import { readFile } from "fs";
import { resolve } from "path";
import { defer, delay } from "lodash-es";
import { hooksPlugin as hooks } from "@dyy-ui-plus/vite-plugins";
import shell from "shelljs";
import UnoCSS from 'unocss/vite'

import vue from "@vitejs/plugin-vue";
import compression from "vite-plugin-compression";
import terser from "@rollup/plugin-terser";

const TRY_MOVE_STYLES_DELAY = 750 as const;

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

function moveStyles() {
  readFile("./dist/umd/index.css.gz", (err) => {
    if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
    defer(() => shell.cp("./dist/umd/index.css", "./dist/index.css"));
  });
}

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    compression({
      filter: /.(cjs|css)$/i,
    }),
    terser({
      compress: {
        // drop_console: ["log"],
        drop_debugger: true,
        passes: 3,
        global_defs: {
          "@DEV": JSON.stringify(isDev),
          "@PROD": JSON.stringify(isProd),
          "@TEST": JSON.stringify(isTest),
        },
      },
    }),
    hooks({
      rmFiles: ["./dist/umd", "./dist/index.css"],
      afterBuild: moveStyles,
    }),
  ],
  build: {
    outDir: "dist/umd",
    lib: {
      entry: resolve(__dirname, "../index.ts"),
      name: "DyyUiPlus",
      fileName: "index",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          return chunkInfo.name as string;
        },
      },
    },
  },
});
