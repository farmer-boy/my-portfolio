# PowerShell Script to Save Profile Image
# Save this as "setup-profile.ps1" in the project root

# Locations to check for profile image
$downloadPath = "$env:USERPROFILE\Downloads"
$desktopPath = "$env:USERPROFILE\Desktop"
$targetPath = "b:\resume\my-portfolio\public\profile.png"

Write-Host "🔍 Looking for profile image..." -ForegroundColor Cyan

# Check Downloads folder
if (Test-Path "$downloadPath\profile.png") {
    Write-Host "✅ Found profile.png in Downloads" -ForegroundColor Green
    Copy-Item "$downloadPath\profile.png" $targetPath -Force
    Write-Host "✅ Copied to public folder!" -ForegroundColor Green
    exit 0
}

if (Test-Path "$downloadPath\profile.jpg") {
    Write-Host "✅ Found profile.jpg in Downloads" -ForegroundColor Green
    Copy-Item "$downloadPath\profile.jpg" $targetPath -Force
    Write-Host "✅ Copied to public folder!" -ForegroundColor Green
    exit 0
}

# Check Desktop folder
if (Test-Path "$desktopPath\profile.png") {
    Write-Host "✅ Found profile.png on Desktop" -ForegroundColor Green
    Copy-Item "$desktopPath\profile.png" $targetPath -Force
    Write-Host "✅ Copied to public folder!" -ForegroundColor Green
    exit 0
}

if (Test-Path "$desktopPath\profile.jpg") {
    Write-Host "✅ Found profile.jpg on Desktop" -ForegroundColor Green
    Copy-Item "$desktopPath\profile.jpg" $targetPath -Force
    Write-Host "✅ Copied to public folder!" -ForegroundColor Green
    exit 0
}

Write-Host "❌ Profile image not found!" -ForegroundColor Red
Write-Host ""
Write-Host "Please save your profile image as:" -ForegroundColor Yellow
Write-Host "  - Downloads\profile.png, or" -ForegroundColor Yellow
Write-Host "  - Desktop\profile.png, or" -ForegroundColor Yellow
Write-Host "  - Downloads\profile.jpg, or" -ForegroundColor Yellow
Write-Host "  - Desktop\profile.jpg" -ForegroundColor Yellow
Write-Host ""
Write-Host "Then run this script again."
exit 1
