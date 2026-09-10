import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import fs from "node:fs";
import path from "node:path";

function netlifySyncPlugin() {
  return {
    name: "netlify-sync",
    closeBundle() {
      try {
        const distClientDir = path.resolve("dist/client");
        const distDir = path.resolve("dist");
        const outputPublicDir = path.resolve(".output/public");

        const headersContent = `/*
  Content-Security-Policy: default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval' data: blob:; style-src * 'unsafe-inline' data: blob:; font-src * data: blob:; img-src * data: blob:; connect-src * wss: ws:;
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
        fs.writeFileSync(path.join(distClientDir, "_headers"), headersContent, "utf-8");
        fs.writeFileSync(path.join(distClientDir, "_redirects"), "/*    /index.html   200\n", "utf-8");

        if (!fs.existsSync(outputPublicDir)) {
          fs.mkdirSync(outputPublicDir, { recursive: true });
        }

        // Copy dist/client items to dist and .output/public for complete cross-compatibility
        const items = fs.readdirSync(distClientDir);
        for (const item of items) {
          const src = path.join(distClientDir, item);
          fs.cpSync(src, path.join(distDir, item), { recursive: true, force: true });
          fs.cpSync(src, path.join(outputPublicDir, item), { recursive: true, force: true });
        }
        console.log("--> Built dist/client natively and mirrored to dist & .output/public successfully!");
      } catch (e) {
        console.error("Netlify sync plugin warning:", e);
      }
    },
  };
}

export default defineConfig({
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
  },
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    netlifySyncPlugin(),
  ],
});
