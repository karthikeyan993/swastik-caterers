import { defineConfig } from "vite";
import { resolve } from "path";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        services: resolve(__dirname, "menu.html"),
      },
    },
  },
  plugins: [imagetools()],
});
