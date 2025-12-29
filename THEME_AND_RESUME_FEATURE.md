# Portfolio Theme & Resume Download Feature

## New Features Added

### 1. **Theme Switcher** 🌙☀️
A dark/light theme toggle has been added to your portfolio:

- **Location**: Top right corner of the Navbar (on desktop) and mobile navigation menu
- **Default**: Dark theme (current slate gradient)
- **Light Mode**: White/gray gradient with adjusted colors for readability
- **Persistence**: Theme preference is saved to browser localStorage
- **Toggle Button**: Click the sun (☀️) or moon (🌙) icon to switch themes

### 2. **Resume Download Functionality** 📥
Users can now download your resume directly from the portfolio:

- **Location**: 
  - "📥 Resume" button in desktop Navbar (top right)
  - "📥 Download Resume" button in mobile menu
  - "📥 Download Resume" button on Hero section
- **File**: Downloads from `C:\Users\Hp\Documents\FARHAN RIAZ 01 (1).pdf`
- **Download Name**: `FARHAN_RIAZ_Resume.pdf`

## How It Works

### Theme System
- Created a new `ThemeContext` for global theme management
- All components use the `useTheme()` hook to access theme state
- Colors automatically adjust between dark and light modes
- Smooth transitions on all color changes

### Resume Download
- Backend Express server handles file downloads securely
- API endpoint: `/api/download-resume`
- Supports cross-origin requests with CORS enabled
- Graceful error handling if file is not found

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

This installs the new packages:
- `express`: Web server
- `cors`: Cross-origin support

### 2. Build the Project
```bash
npm run build
```

### 3. Run the Application

**For Development (React only):**
```bash
npm start
```

**For Production (with Resume Download):**
```bash
npm run dev
```

This builds React and starts the Express server on port 5000.

## Project Structure

```
src/
├── context/
│   └── ThemeContext.tsx          # Theme management context
├── services/
│   └── resumeService.ts          # Resume download service
├── components/
│   ├── Navbar.tsx                # Updated with theme toggle & resume button
│   ├── Hero.tsx                  # Updated with theme support
│   ├── About.tsx                 # Updated with theme support
│   ├── Contact.tsx               # Updated with theme support
│   ├── Skills.tsx                # Updated with theme support
│   ├── Experience.tsx            # Updated with theme support
│   ├── Education.tsx             # Updated with theme support
│   ├── Projects.tsx              # Updated with theme support
│   └── Footer.tsx                # Updated with theme support
└── App.tsx                       # Updated with ThemeProvider

server.js                         # Express server for resume downloads
```

## Theme Colors

### Dark Mode (Default)
- Background: Slate gradients (950, 900)
- Text: White/Gray-300
- Accent: Cyan-400, Blue gradients
- Borders: Cyan-500/20

### Light Mode
- Background: White/Gray gradients
- Text: Gray-900/700
- Accent: Blue gradients
- Borders: Blue-200/gray-300

## Environment Variables

If you need to change the resume file path, edit `server.js`:

```javascript
const resumePath = 'C:\\Users\\Hp\\Documents\\FARHAN RIAZ 01 (1).pdf';
```

## Browser Compatibility

- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Theme preference persists across browser sessions
- Mobile responsive with optimized touch targets

## Notes

- The resume file must exist at the specified path for downloads to work
- The Express server requires Node.js to run
- For deployment, ensure the server has read access to the resume file location
