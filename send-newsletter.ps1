param(
    [string]$title,
    [string]$description,
    [string]$slug,
    [string]$image = ""
)

$secret = "804b5dae70bb56e97209a9c9229a89378b90a41696e1353b23f40745d46824b6"

$body = @{
    title       = $title
    description = $description
    slug        = $slug
    image       = $image
} | ConvertTo-Json

$response = Invoke-RestMethod `
    -Method POST `
    -Uri "https://euhm.fr/api/newsletter/send" `
    -Headers @{"Authorization" = "Bearer $secret"} `
    -ContentType "application/json" `
    -Body $body

Write-Host "Envoyé : $($response.sent) emails"