import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
/* @ts-ignore */
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8001,
    host: true,
  },
  resolve: {
    alias: {
      /* @ts-ignore */
      "@": path.resolve(__dirname, "./src"),
      /* @ts-ignore */
      shared: path.resolve(__dirname, "./src/shared"),
      /* @ts-ignore */
      envirements: path.resolve(__dirname, "./src/app/envirements"),
      /* @ts-ignore */
      entities: path.resolve(__dirname, "./src/entities"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
});
