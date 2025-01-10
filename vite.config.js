import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import visualizer from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: "./visualizer/index.html",
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3001,
    proxy: {
      "/api": {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
