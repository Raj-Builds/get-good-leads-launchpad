import fs from "node:fs";
import path from "node:path";

const dirs = [
  path.resolve("dist"),
  path.resolve("dist/client"),
  path.resolve(".output/public"),
];

dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const placeholderHtml = `<!DOCTYPE html><html><head><title>Building...</title></head><body>Building site...</body></html>`;
  fs.writeFileSync(path.join(dir, "index.html"), placeholderHtml, "utf-8");
});

console.log("Prebuild: Created placeholder target directories successfully!");
