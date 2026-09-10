import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(".output/public");
const assetsDir = path.join(publicDir, "assets");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

let cssFile = "";
let jsFile = "";

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  cssFile = files.find((f) => f.endsWith(".css")) || "";
  jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js")) || files.find((f) => f.endsWith(".js")) || "";
}

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Get Good Leads — More Leads. Better Business.</title>
    <meta name="description" content="Get Good Leads is a performance marketing agency generating qualified, sales-ready leads through paid ads, SEO, funnels and CRO." />
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : ""}
  </body>
</html>
`;

fs.writeFileSync(path.join(publicDir, "index.html"), htmlContent, "utf-8");
console.log("Successfully generated .output/public/index.html for deployment!");
