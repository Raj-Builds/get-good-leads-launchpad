import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import fs from "node:fs";
import path from "node:path";

function netlifyMultiTargetPlugin() {
  return {
    name: "netlify-multi-target",
    closeBundle() {
      try {
        const distDir = path.resolve("dist");
        const distClientDir = path.resolve("dist/client");
        const outputPublicDir = path.resolve(".output/public");

        const headersContent = `/*
  Content-Security-Policy: default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval' data: blob:; style-src * 'unsafe-inline' data: blob:; font-src * data: blob:; img-src * data: blob:; connect-src * wss: ws:;
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
        fs.writeFileSync(path.join(distDir, "_headers"), headersContent, "utf-8");
        fs.writeFileSync(path.join(distDir, "_redirects"), "/*    /index.html   200\n", "utf-8");

        if (!fs.existsSync(distClientDir)) {
          fs.mkdirSync(distClientDir, { recursive: true });
        }
        if (!fs.existsSync(outputPublicDir)) {
          fs.mkdirSync(outputPublicDir, { recursive: true });
        }

        const items = fs.readdirSync(distDir);
        for (const item of items) {
          if (item !== "client") {
            const src = path.join(distDir, item);
            fs.cpSync(src, path.join(distClientDir, item), { recursive: true, force: true });
            fs.cpSync(src, path.join(outputPublicDir, item), { recursive: true, force: true });
          }
        }
        console.log("--> Built dist, dist/client, and .output/public successfully inside Vite closeBundle!");
      } catch (e) {
        console.error("Vite multi-target plugin warning:", e);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    netlifyMultiTargetPlugin(),
  ],
});
