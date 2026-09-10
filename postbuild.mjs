import fs from "node:fs";
import path from "node:path";

const targetDirs = [path.resolve("dist"), path.resolve(".output/public")];

targetDirs.forEach((targetDir) => {
  if (fs.existsSync(targetDir)) {
    const headersContent = `/*
  Content-Security-Policy: default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval' data: blob:; style-src * 'unsafe-inline' data: blob:; font-src * data: blob:; img-src * data: blob:; connect-src * wss: ws:;
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
    fs.writeFileSync(path.join(targetDir, "_headers"), headersContent, "utf-8");
  }
});

console.log("Successfully prepared build output headers for Netlify deployment!");
