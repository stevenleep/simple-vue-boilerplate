import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import vueJSX from "@vitejs/plugin-vue-jsx";
import progress from "vite-plugin-progress";
import viteCompression from "vite-plugin-compression";
import eslintPlugin from "vite-plugin-eslint";
import Inspect from "vite-plugin-inspect";
import { createStyleImportPlugin, AndDesignVueResolve } from "vite-plugin-style-import";
import mkcertPlugin from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  // Although the documentation is recommended ./ for development environment,
  // it is convenient for migration and local testing, and production is switched to this path
  // ref: https://vitejs.bootcss.com/config/#base
  base: "./",

  // https://cn.vitejs.dev/config/build-options.html#build-sourcemap
  build: {
    /**
     * XXX: About sourcemap
     *
     * It is recommended to open in the real generation environment,
     * deploy the sourceMap in different services, and access through the internal network
     *
     * Can be used for: wrong positioning in the monitoring system
     */
    sourcemap: false,

    cssCodeSplit: true,

    rollupOptions: {
      output: {
        manualChunks: {
          // https://vitejs.dev/guide/build.html#splitting-vendor-chunks
          vue: ["vue", "vue-router"],
          AntDesignVue: ["ant-design-vue"],
          pinia: ["pinia"],
        },
      },
    },
  },

  plugins: [
    vue(),

    // https://www.npmjs.com/package/@vitejs/plugin-vue-jsx
    vueJSX(),

    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()],
      libs: [
        {
          libraryName: "ant-design-vue",
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`;
          },
        },
      ],
    }),

    Components({
      dts: true,
      resolvers: [AntDesignVueResolver({ importStyle: "less", resolveIcons: true })],
    }),
    AutoImport({
      dirs: ["src/components", "src/hooks", "src/compatibles", "src/directives"],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: "src/auto-imports.d.ts",
      imports: ["vue", "vue-router", "pinia", "vue-i18n", "@vueuse/core"],
    }),

    eslintPlugin(),

    viteCompression(),

    progress(),

    Inspect(),

    mkcertPlugin(),
  ],

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#1DA57A",
        },
      },
    },
  },

  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
      "@": "/src",
      "@components": "/src/components",
      "@store": "/src/store",
      "@services": "/src/services",
      "@http": "/src/helpers/http",
      "@helpers": "/src/helpers",
      "@hooks": "/src/hooks",
      "@router": "/src/router",
      "@configs": "/src/configs",
      "@views": "/src/views",
      "@directives": "/src/directives",
      "@compatibles": "/src/compatibles",
      "@assets": "/src/assets",
      "@constants": "/src/constants",
      "@enums": "/src/enums",
    },
  },
});
