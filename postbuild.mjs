import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");

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
}

console.log("Successfully prepared dist directory (_headers & _redirects) for Netlify deployment!");
