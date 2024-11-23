import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [eslint],
  base: "https://gianicolajara.github.io/starlinkproject",
});
