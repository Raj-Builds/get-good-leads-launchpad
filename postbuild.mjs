import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const distClientDir = path.resolve("dist/client");
const outputPublicDir = path.resolve(".output/public");

if (fs.existsSync(distDir)) {
  const headersContent = `/*
  Content-Security-Policy: default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval' data: blob:; style-src * 'unsafe-inline' data: blob:; font-src * data: blob:; img-src * data: blob:; connect-src * wss: ws:;
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
  fs.writeFileSync(path.join(distDir, "_headers"), headersContent, "utf-8");

  const redirectsContent = "/*    /index.html   200\n";
  fs.writeFileSync(path.join(distDir, "_redirects"), redirectsContent, "utf-8");

  // Copy files to dist/client so Netlify UI config publish directory 'dist/client' works
  if (!fs.existsSync(distClientDir)) {
    fs.mkdirSync(distClientDir, { recursive: true });
  }

  const items = fs.readdirSync(distDir);
  items.forEach((item) => {
    if (item !== "client") {
      const srcPath = path.join(distDir, item);
      const destPath = path.join(distClientDir, item);
      fs.cpSync(srcPath, destPath, { recursive: true });
    }
  });

  // Also mirror to .output/public
  fs.cpSync(distDir, outputPublicDir, { recursive: true });
}

console.log("Successfully prepared dist, dist/client & .output/public directories for Netlify deployment!");
