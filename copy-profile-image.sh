#!/bin/bash
# This script helps you save your profile image

# To use this script:
# 1. Download/save your profile image
# 2. Place it in your Downloads folder as "profile.png" or "profile.jpg"
# 3. Run this script

# Copy from downloads (modify path if different)
echo "Copying profile image to public folder..."

# Option 1: If image is in Downloads folder
cp ~/Downloads/profile.png b:/resume/my-portfolio/public/profile.png 2>/dev/null || \
cp ~/Downloads/profile.jpg b:/resume/my-portfolio/public/profile.png 2>/dev/null || \
echo "Image not found in Downloads"

# Option 2: If image is on Desktop
cp ~/Desktop/profile.png b:/resume/my-portfolio/public/profile.png 2>/dev/null || \
cp ~/Desktop/profile.jpg b:/resume/my-portfolio/public/profile.png 2>/dev/null || \
echo "Image not found on Desktop"

echo "Done! Refresh your browser to see the image."
