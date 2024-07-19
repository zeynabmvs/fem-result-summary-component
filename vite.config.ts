import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/fem-result-summary-component/",
  // resolve: {
  //   alias: {
  //     src: "/src",
  //     components: "/src/components",
  //     assets: "/src/assets/",
  //   },
  // },
});
