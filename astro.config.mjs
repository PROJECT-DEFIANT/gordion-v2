import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// import browserslist from "browserslist";
// import { resolveToEsbuildTarget } from "esbuild-plugin-browserslist";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
});
