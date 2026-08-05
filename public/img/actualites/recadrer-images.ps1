<#
    Recadre et redimensionne des images au format 1200 x 630 (Open Graph).
    Le recadrage est centré et ne déforme jamais l'image : elle est agrandie
    pour couvrir le cadre, puis les débords sont coupés.

    Utilisation :
        .\recadrer-images.ps1                          # dossier courant -> .\og
        .\recadrer-images.ps1 -Source "C:\photos"      # dossier précis
        .\recadrer-images.ps1 -Ancrage haut            # cadrer vers le haut (portraits)

    Aucune installation requise : utilise .NET, présent sur Windows.
#>

param(
    [string]$Source  = ".",
    [string]$Sortie  = "",
    [int]$Largeur    = 1200,
    [int]$Hauteur    = 630,
    [ValidateSet("centre", "haut", "bas")]
    [string]$Ancrage = "centre",
    [int]$Qualite    = 85
)

Add-Type -AssemblyName System.Drawing

$Source = (Resolve-Path -LiteralPath $Source).Path
if (-not $Sortie) { $Sortie = Join-Path $Source "og" }
if (-not (Test-Path -LiteralPath $Sortie)) {
    New-Item -ItemType Directory -Path $Sortie | Out-Null
}

# Encodeur JPEG avec réglage de qualité
$encodeur = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
            Where-Object { $_.MimeType -eq "image/jpeg" }
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, [long]$Qualite)

$fichiers = Get-ChildItem -LiteralPath $Source -File |
            Where-Object { $_.Extension -match '^\.(jpg|jpeg|png|webp)$' }

if ($fichiers.Count -eq 0) {
    Write-Host "Aucune image trouvee dans $Source" -ForegroundColor Yellow
    return
}

Write-Host "$($fichiers.Count) image(s) a traiter -> $Sortie`n"

foreach ($f in $fichiers) {
    try {
        $img = [System.Drawing.Image]::FromFile($f.FullName)

        # Facteur d'agrandissement pour couvrir tout le cadre
        $ratio = [Math]::Max($Largeur / $img.Width, $Hauteur / $img.Height)
        $nouvL = [int][Math]::Ceiling($img.Width  * $ratio)
        $nouvH = [int][Math]::Ceiling($img.Height * $ratio)

        # Position du cadre dans l'image agrandie
        $decX = [int](($nouvL - $Largeur) / 2)
        switch ($Ancrage) {
            "haut"   { $decY = 0 }
            "bas"    { $decY = $nouvH - $Hauteur }
            default  { $decY = [int](($nouvH - $Hauteur) / 2) }
        }

        $cible    = New-Object System.Drawing.Bitmap($Largeur, $Hauteur)
        $graphics = [System.Drawing.Graphics]::FromImage($cible)
        $graphics.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

        $graphics.DrawImage($img, (-$decX), (-$decY), $nouvL, $nouvH)

        # Nom de sortie en minuscules, sans accent ni espace
        $base = [System.IO.Path]::GetFileNameWithoutExtension($f.Name).ToLower()
        $base = $base -replace '[àâä]','a' -replace '[éèêë]','e' -replace '[îï]','i' `
                      -replace '[ôö]','o' -replace '[ùûü]','u' -replace 'ç','c'
        $base = $base -replace '[^a-z0-9]+','-' -replace '(^-|-$)',''
        $dest = Join-Path $Sortie "$base.jpg"

        $cible.Save($dest, $encodeur, $params)

        $graphics.Dispose(); $cible.Dispose(); $img.Dispose()
        Write-Host "  OK  $($f.Name)  ->  $base.jpg"
    }
    catch {
        Write-Host "  ERREUR sur $($f.Name) : $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nTermine. Fichiers dans : $Sortie" -ForegroundColor Green
