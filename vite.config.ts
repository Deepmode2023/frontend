import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
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
      "@": path.resolve(__dirname, "./src"),
      shared: path.resolve(__dirname, "./src/shared"),
      envirements: path.resolve(__dirname, "./src/app/envirements"),
      entities: path.resolve(__dirname, "./src/entities"),
      features: path.resolve(__dirname, "./src/features"),
      widget: path.resolve(__dirname, "./src/widget"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
});
