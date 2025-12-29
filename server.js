const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve build files from build directory
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint to download resume
app.get('/api/download-resume', (req, res) => {
  try {
    const resumePath = 'C:\\Users\\Hp\\Documents\\FARHAN RIAZ 01 (1).pdf';
    
    // Check if file exists
    if (!fs.existsSync(resumePath)) {
      return res.status(404).json({ error: 'Resume file not found' });
    }

    // Send the file
    res.download(resumePath, 'FARHAN_RIAZ_Resume.pdf', (err) => {
      if (err) {
        console.error('Download error:', err);
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to download resume' });
  }
});

// Fallback to React app for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
