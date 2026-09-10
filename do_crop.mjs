import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const filePath = 'file:///' + path.resolve('public/logo.png').replace(/\\/g, '/');
    
    await page.goto(filePath);
    await page.waitForLoadState('networkidle');
    
    const base64 = await page.evaluate(() => {
      const img = document.querySelector('img');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;
      
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const idx = (y * canvas.width + x) * 4;
          const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
          if (a > 20 && (r < 240 || g < 240 || b < 240)) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }
      
      const pad = 16;
      minX = Math.max(0, minX - pad);
      minY = Math.max(0, minY - pad);
      maxX = Math.min(canvas.width, maxX + pad);
      maxY = Math.min(canvas.height, maxY + pad);
      
      const cropW = maxX - minX;
      const cropH = maxY - minY;
      
      const outCanvas = document.createElement('canvas');
      outCanvas.width = cropW;
      outCanvas.height = cropH;
      const outCtx = outCanvas.getContext('2d');
      outCtx.drawImage(canvas, minX, minY, cropW, cropH, 0, 0, cropW, cropH);
      
      return outCanvas.toDataURL("image/png").replace(/^data:image\/png;base64,/, "");
    });
    
    const buffer = Buffer.from(base64, 'base64');
    fs.writeFileSync('src/assets/logo.png', buffer);
    fs.writeFileSync('public/logo.png', buffer);
    console.log("SUCCESSFULLY_CROPPED_LOGO! Saved size:", buffer.length);
    await browser.close();
  } catch (err) {
    console.error("ERROR_CROPPING:", err);
  }
})();
