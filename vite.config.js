// change 7: vite config required for Railway (and any future deploy target)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // If deploying to a sub-path (e.g. GitHub Pages), set base:
  // base: "/your-repo-name/",
});