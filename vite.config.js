/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // ADD YOUR PAGES HERE
        contact: resolve(__dirname, "contact.html"),
        posts: resolve(__dirname, "posts.html"),
        blogDetail: resolve(__dirname, "post.html"),
        about: resolve(__dirname, "about.html"),
        privacy: resolve(__dirname, "privacy.html"),
      },
    },
  },
});
