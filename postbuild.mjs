import fs from "node:fs";
import path from "node:path";

const targetDir = path.resolve(".output/public");

if (fs.existsSync(targetDir)) {
  const headersContent = `/*
  Content-Security-Policy: default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval' data: blob:; style-src * 'unsafe-inline' data: blob:; font-src * data: blob:; img-src * data: blob:; connect-src * wss: ws:;
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
  fs.writeFileSync(path.join(targetDir, "_headers"), headersContent, "utf-8");

  // Remove any conflicting static index.html or _redirects that bypass Nitro SSR functions
  const staticIndex = path.join(targetDir, "index.html");
  if (fs.existsSync(staticIndex)) {
    fs.unlinkSync(staticIndex);
  }
  const staticRedirects = path.join(targetDir, "_redirects");
  if (fs.existsSync(staticRedirects)) {
    fs.unlinkSync(staticRedirects);
  }
}

console.log("Successfully prepared .output/public for Nitro Netlify SSR deployment!");
