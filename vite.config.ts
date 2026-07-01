/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  },
  server: {
    host: "127.0.0.1",
    port: 5173
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/leaflet")) return "map-vendor";
          if (id.includes("node_modules/react")) return "react-vendor";
          if (id.includes("node_modules/lucide-react")) return "icons";
        }
      }
    }
  }
});
