import fs from "node:fs";
import path from "node:path";

try {
  const distDir = path.resolve("dist");
  const distClientDir = path.resolve("dist/client");
  const outputPublicDir = path.resolve(".output/public");

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

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

  // Safely populate dist/client
  if (!fs.existsSync(distClientDir)) {
    fs.mkdirSync(distClientDir, { recursive: true });
  }

  const items = fs.readdirSync(distDir);
  for (const item of items) {
    if (item !== "client") {
      const src = path.join(distDir, item);
      const dest = path.join(distClientDir, item);
      fs.cpSync(src, dest, { recursive: true, force: true });
    }
  }

  // Safely populate .output/public
  if (!fs.existsSync(outputPublicDir)) {
    fs.mkdirSync(outputPublicDir, { recursive: true });
  }
  for (const item of items) {
    if (item !== "client") {
      const src = path.join(distDir, item);
      const dest = path.join(outputPublicDir, item);
      fs.cpSync(src, dest, { recursive: true, force: true });
    }
  }

  console.log("Successfully prepared dist, dist/client & .output/public for deployment!");
} catch (err) {
  console.error("Postbuild log:", err);
}
