import path, { dirname } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
const filename = fileURLToPath(import.meta.url);
const dirname1 = dirname(filename);
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(dirname1, "./src"),
    },
  },
});
