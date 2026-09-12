Add-Type -AssemblyName System.Drawing

$imgPath = "C:\Users\RAJ SONI\.gemini\antigravity\brain\25078409-7dd2-4434-a04d-c8a29547a235\media__1789218297082.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$pad = 16
$minX = [Math]::Max(0, $minX - $pad)
$minY = [Math]::Max(0, $minY - $pad)
$maxX = [Math]::Min($bmp.Width - 1, $maxX + $pad)
$maxY = [Math]::Min($bmp.Height - 1, $maxY + $pad)

$cropWidth = $maxX - $minX + 1
$cropHeight = $maxY - $minY + 1

$target = New-Object System.Drawing.Bitmap $cropWidth, $cropHeight
$g = [System.Drawing.Graphics]::FromImage($target)
$rect = New-Object System.Drawing.Rectangle $minX, $minY, $cropWidth, $cropHeight
$g.DrawImage($bmp, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$outDir = "c:\Users\RAJ SONI\Documents\get-good-leads-launchpad\public"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir }

$outPath = Join-Path $outDir "logo.png"
$target.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

# Transparent background version
$transparent = New-Object System.Drawing.Bitmap $cropWidth, $cropHeight
for ($y = 0; $y -lt $cropHeight; $y++) {
    for ($x = 0; $x -lt $cropWidth; $x++) {
        $c = $target.GetPixel($x, $y)
        if ($c.R -gt 238 -and $c.G -gt 238 -and $c.B -gt 238) {
            $transparent.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } else {
            $transparent.SetPixel($x, $y, $c)
        }
    }
}
$transPath = Join-Path $outDir "logo-transparent.png"
$transparent.Save($transPath, [System.Drawing.Imaging.ImageFormat]::Png)

$bmp.Dispose()
$target.Dispose()
$transparent.Dispose()

Write-Host "Logo successfully cropped and saved to logo.png and logo-transparent.png"
