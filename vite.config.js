// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        events: resolve(__dirname, "src/events.html"),
        find: resolve(__dirname, "src/find_os.html"),
        kontakt: resolve(__dirname, "src/om_kontakt.html"),
        vaermed: resolve(__dirname, "src/om_vaermed.html"),
        vildskud: resolve(__dirname, "src/om_vildskud.html"),
        program: resolve(__dirname, "src/program.html"),
        singleview: resolve(__dirname, "src/singleview.html"),
        // about: resolve(__dirname, "src/about.html"),
        // skriv liste med sider her
      },
    },
  },
});
