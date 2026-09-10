import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
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

  // Recursively copy dist to .output/public so any publish directory setting works 100%
  fs.cpSync(distDir, outputPublicDir, { recursive: true });
}

console.log("Successfully prepared dist & .output/public directories for Netlify deployment!");
