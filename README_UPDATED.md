# 🚀 Professional Portfolio Website

A **production-ready, fully-routed React portfolio** built with industry-standard practices.

![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-blue?style=flat-square&logo=tailwindcss)
![React Router](https://img.shields.io/badge/React%20Router-6.x-blue?style=flat-square&logo=react-router)

---

## ✨ Features

✅ **7 Dedicated Pages** with client-side routing  
✅ **Dynamic Content** from JSON files  
✅ **Responsive Design** (mobile, tablet, desktop)  
✅ **Contact Form** with real-time validation  
✅ **Professional Styling** with Tailwind CSS  
✅ **Reusable Components** for easy maintenance  
✅ **Production Ready** with optimized build  
✅ **SEO-Friendly** HTML structure  

---

## 🎯 Pages

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Hero landing page |
| `/about` | About | Professional summary & interests |
| `/skills` | Skills | Technical skills by category |
| `/experience` | Experience | Work history and responsibilities |
| `/education` | Education | Degrees and institutions |
| `/projects` | Projects | Showcased work and portfolio projects |
| `/contact` | Contact | Contact form with validation |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Navigation with active routes
│   ├── Footer.tsx              # Footer with social links
│   └── SectionTitle.tsx        # Reusable title component
├── pages/
│   ├── Home.tsx                # Home page (/)
│   ├── About.tsx               # About page (/about)
│   ├── Skills.tsx              # Skills page (/skills)
│   ├── Experience.tsx          # Experience page (/experience)
│   ├── Education.tsx           # Education page (/education)
│   ├── Projects.tsx            # Projects page (/projects)
│   └── Contact.tsx             # Contact page (/contact)
├── routes/
│   └── AppRoutes.tsx           # Routing configuration
├── data/
│   ├── skills.json             # Skills data
│   ├── experience.json         # Experience data
│   ├── education.json          # Education data
│   ├── projects.json           # Projects data
│   └── resumeData.ts           # Main resume data
├── types/
│   └── index.ts                # TypeScript interfaces
├── App.tsx                     # Main app with Router
└── index.tsx                   # Entry point
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>

# Navigate to project
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The site will open at `http://localhost:3000`

---

## 📝 Customization

### 1. Update Personal Information
Edit `src/data/resumeData.ts`:
```ts
export const resumeData: ResumeData = {
  name: "Your Name",
  title: "Your Title",
  // ... update your info
};
```

### 2. Add Your Profile Image
Place image at: `public/profile.png`

### 3. Add Your Resume PDF
Place PDF at: `public/resume.pdf`

### 4. Update Skills
Edit `src/data/skills.json`

### 5. Update Projects
Edit `src/data/projects.json`

### 6. Update Experience
Edit `src/data/experience.json`

### 7. Update Education
Edit `src/data/education.json`

---

## 🎨 Customizing Style

All styling uses **Tailwind CSS**. To change colors:

**Example: Blue → Purple**
```tsx
// Change
className="bg-blue-600 hover:bg-blue-700"
// To
className="bg-purple-600 hover:bg-purple-700"
```

Available Tailwind colors: `blue`, `purple`, `indigo`, `green`, `red`, `pink`, etc.

---

## 🔧 Available Scripts

```bash
# Development
npm start          # Start dev server (port 3000)

# Build
npm run build      # Production build

# Testing
npm test           # Run tests

# Eject (not recommended)
npm run eject      # Eject from Create React App
```

---

## 📦 Dependencies

- **React** 19.2 - UI library
- **React Router DOM** 6.x - Client-side routing
- **TypeScript** 4.9 - Type safety
- **Tailwind CSS** 3.x - Styling
- **React Scripts** 5.0 - Build tools

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Deploy on Vercel Dashboard
# 1. Connect your GitHub repo
# 2. Auto-deploys on push
# Your site is live! 🎉
```

### Netlify
```bash
# Build
npm run build

# Drag & drop 'build' folder to Netlify
# Your site is live! 🎉
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://yourusername.github.io/portfolio",
# "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build" }

npm run deploy
```

---

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started immediately
- **[PORTFOLIO_DOCUMENTATION.md](PORTFOLIO_DOCUMENTATION.md)** - Complete technical docs
- **[CHANGES.md](CHANGES.md)** - What was refactored

---

## 🎯 Form Validation

The contact form validates:
- **Name**: Required, min 2 characters
- **Email**: Required, valid email format
- **Message**: Required, min 10 characters

Real-time error feedback and success message display.

---

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px (md:)
- **Desktop**: 1024px+ (lg:)

All components are mobile-first and fully responsive.

---

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on forms
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support

---

## 🔐 What's Included

✅ Production-ready code  
✅ TypeScript support  
✅ Responsive design  
✅ Form validation  
✅ SEO-friendly structure  
✅ Professional UI/UX  
✅ Clean code organization  
✅ Comprehensive documentation  

---

## 📧 Contact Form Integration

### Demo (Current)
Form validation works but doesn't send email yet.

### Send to Email (Two Options)

**Option 1: EmailJS (Easy)**
```tsx
// Install EmailJS
npm install @emailjs/browser

// In Contact.tsx, add:
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  // ... validation ...
  await emailjs.send('service_id', 'template_id', formData, 'public_key');
};
```

**Option 2: Your Backend**
```tsx
const handleSubmit = async (e) => {
  // ... validation ...
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};
```

---

## 🛠️ Troubleshooting

### Port 3000 already in use?
```bash
# Use a different port
PORT=3001 npm start
```

### Build fails?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles not loading?
- Clear browser cache (Ctrl + Shift + Delete)
- Restart dev server
- Check class names are correct

---

## 📊 Performance

- Optimized production build
- Code splitting with React Router
- Lazy loading support (ready)
- Minified CSS and JS
- Gzip compression

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

Built with:
- ⚛️ React for UI
- 🎨 Tailwind CSS for styling
- 🛣️ React Router for navigation
- 📘 TypeScript for type safety

---

## 🚀 Ready to Deploy?

1. Update your information in `src/data/`
2. Add your profile image and resume
3. Test locally: `npm start`
4. Build: `npm run build`
5. Deploy to your chosen platform
6. Share your portfolio! 🎉

---

**Made with ❤️ for aspiring developers**

Start with [QUICK_START.md](QUICK_START.md) for immediate next steps.
