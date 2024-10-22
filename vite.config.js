import { defineConfig } from "vite";

export default defineConfig({
  rootDir: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
