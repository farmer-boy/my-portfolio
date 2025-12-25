# Professional Portfolio Website - Documentation

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Navigation with active route highlighting
│   ├── Footer.tsx              # Footer with social links
│   ├── SectionTitle.tsx        # Reusable title component
│   ├── Header.tsx              # (Legacy - replaced by Navbar)
│   ├── About.tsx               # (Legacy - moved to pages)
│   ├── Contact.tsx             # (Legacy - moved to pages)
│   ├── Education.tsx           # (Legacy - moved to pages)
│   ├── Experience.tsx          # (Legacy - moved to pages)
│   ├── Hero.tsx                # (Legacy - moved to pages)
│   ├── Projects.tsx            # (Legacy - moved to pages)
│   └── Skills.tsx              # (Legacy - moved to pages)
├── pages/
│   ├── Home.tsx                # Hero landing page (/)
│   ├── About.tsx               # About page (/about)
│   ├── Skills.tsx              # Skills page (/skills)
│   ├── Experience.tsx          # Experience page (/experience)
│   ├── Education.tsx           # Education page (/education)
│   ├── Projects.tsx            # Projects page (/projects)
│   └── Contact.tsx             # Contact page with form validation (/contact)
├── routes/
│   └── AppRoutes.tsx           # Centralized routing configuration
├── data/
│   ├── skills.json             # Skills data structure
│   ├── experience.json         # Experience data
│   ├── education.json          # Education data
│   ├── projects.json           # Projects data
│   └── resumeData.ts           # Main resume data (TypeScript)
├── types/
│   └── index.ts                # TypeScript interfaces
├── App.tsx                     # Main app with Router setup
├── index.tsx                   # Entry point
└── index.css                   # Tailwind CSS directives
```

---

## 🎯 Key Features

### 1. **Client-Side Routing (React Router v6)**
- Clean route configuration in `src/routes/AppRoutes.tsx`
- Active route highlighting in navbar
- Mobile-responsive hamburger menu
- Smooth navigation between pages

### 2. **Reusable Components**
- **Navbar**: Displays all routes with active state indicator
- **Footer**: Contains social links and quick navigation
- **SectionTitle**: Reusable page heading component with optional subtitle

### 3. **Dynamic Content from JSON**
- All data stored in JSON files (skills, experience, education, projects)
- Data rendered using `.map()` for maintainability
- Easy to update content without touching component logic

### 4. **Contact Form with Validation**
- Real-time form validation
- Email format validation
- Character length validation
- Error messaging for user feedback
- Loading state during submission
- Success confirmation message
- Accessible form with proper labels and ARIA attributes

### 5. **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Hamburger menu for mobile devices
- Grid layouts that adapt to screen size
- Touch-friendly buttons and spacing

### 6. **Professional Styling**
- Consistent color scheme (blue primary, gray accents)
- Proper typography hierarchy
- Hover effects and transitions
- Gradient backgrounds
- Shadow effects for depth
- Semantic HTML structure for SEO

---

## 🚀 How to Use

### Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The site will be available at `http://localhost:3000`

---

## 📝 How to Add New Content

### Adding a New Skill Category

Edit `src/data/skills.json`:

```json
{
  "skillCategories": [
    {
      "category": "New Category",
      "skills": ["Skill 1", "Skill 2", "Skill 3"]
    }
    // ... existing categories
  ]
}
```

The Skills page will automatically display the new category!

### Adding a New Project

Edit `src/data/projects.json`:

```json
{
  "projects": [
    {
      "id": 6,
      "title": "Your New Project",
      "description": "Brief description",
      "longDescription": "Detailed description",
      "techStack": ["Tech1", "Tech2", "Tech3"],
      "features": ["Feature 1", "Feature 2"],
      "links": {
        "live": "https://yourproject.com",
        "github": "https://github.com/yourrepo"
      }
    }
    // ... existing projects
  ]
}
```

### Adding a New Experience

Edit `src/data/experience.json`:

```json
{
  "experiences": [
    {
      "id": 2,
      "role": "Position Title",
      "company": "Company Name",
      "duration": "2024 - Present",
      "description": "Brief description",
      "responsibilities": [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3"
      ]
    }
    // ... existing experiences
  ]
}
```

### Adding New Education

Edit `src/data/education.json`:

```json
{
  "educations": [
    {
      "id": 2,
      "degree": "Degree Name",
      "university": "University Name",
      "years": "2024 - 2028",
      "cgpa": "3.8 / 4.0",
      "description": "Program description"
    }
    // ... existing educations
  ]
}
```

### Creating a New Page

1. Create a new file in `src/pages/YourPage.tsx`:

```tsx
import React from "react";
import SectionTitle from "../components/SectionTitle";

const YourPage: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="Your Page Title" subtitle="Optional subtitle" />
        {/* Your content here */}
      </div>
    </section>
  );
};

export default YourPage;
```

2. Add the route to `src/routes/AppRoutes.tsx`:

```tsx
import YourPage from "../pages/YourPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Existing routes */}
      <Route path="/your-page" element={<YourPage />} />
    </Routes>
  );
};
```

3. Add navigation link to `src/components/Navbar.tsx`:

```tsx
const navLinks = [
  // ... existing links
  { path: "/your-page", label: "Your Page" },
];
```

---

## 🎨 Styling with Tailwind CSS

### Color Scheme
- **Primary**: `text-blue-600`, `bg-blue-600`, `border-blue-600`
- **Secondary**: `bg-gray-50`, `text-gray-700`
- **Accent**: `bg-yellow-400` (for CTAs)
- **Dark**: `bg-gray-900` (footer)

### Common Classes Used
```tsx
// Containers
className="container mx-auto max-w-4xl"
className="w-full py-20 px-4"

// Typography
className="text-4xl font-bold"
className="text-gray-700"

// Spacing
className="gap-8 mb-6 mt-4"

// Grid Layouts
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"

// Hover Effects
className="hover:text-blue-600 transition"

// Responsive
className="hidden md:flex"
className="flex md:grid"
```

---

## 🔄 Form Validation Details (Contact Page)

### Validation Rules

1. **Name Field**
   - Required
   - Minimum 2 characters

2. **Email Field**
   - Required
   - Valid email format (contains @ and .)

3. **Message Field**
   - Required
   - Minimum 10 characters

### Validation Behavior

- Errors display below each field
- Errors clear when user starts typing
- Form won't submit if validation fails
- Success message shows for 5 seconds after submission
- Loading state prevents double submission

### Customizing Form

To integrate with a backend:

```tsx
// Replace the API call in handleSubmit
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

if (!response.ok) throw new Error('Failed to send');
```

---

## 📱 Mobile Responsiveness

### Breakpoints Used

```
Mobile: 0px - 767px
Tablet: 768px+ (md:)
Desktop: 1024px+ (lg:)
```

### Mobile-First Features

1. **Navbar**: Hamburger menu on mobile
2. **Grids**: Single column on mobile → multiple columns on desktop
3. **Typography**: Smaller on mobile → larger on desktop
4. **Images**: Full width on mobile → constrained on desktop

---

## 🚀 Deployment Guide

### Deploy to Vercel (Recommended)

```bash
# 1. Push code to GitHub
git push origin main

# 2. Go to https://vercel.com
# 3. Import your GitHub repository
# 4. Vercel auto-detects React app
# 5. Deploy!
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

### Deploy to Netlify

```bash
# Build the app
npm run build

# Deploy the build folder to Netlify
# Or connect your GitHub repo to Netlify
```

---

## 🔗 Updating Contact Information

Edit `src/data/resumeData.ts`:

```ts
contact: {
  phone: "+92 309 XXXXXXX",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username"
},
```

---

## 🛠️ Troubleshooting

### Routes not working?
- Ensure `BrowserRouter` wraps your app in `App.tsx`
- Check route paths match link paths (case-sensitive)

### Styles not applying?
- Clear browser cache (`Ctrl + Shift + Delete`)
- Verify Tailwind classes are spelled correctly
- Check if `index.css` has Tailwind directives

### Form not submitting?
- Check browser console for validation errors
- Verify all fields meet validation requirements
- Check network tab for API errors (if using backend)

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [React Router v6 Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## ✨ Next Steps

1. **Add Profile Image**: Place your image at `/public/profile.png`
2. **Update Resume PDF**: Place at `/public/resume.pdf`
3. **Customize Colors**: Edit Tailwind classes throughout
4. **Add More Projects**: Update `src/data/projects.json`
5. **Deploy**: Choose your preferred hosting platform
6. **Set Up Analytics**: Add Google Analytics or similar
7. **Add SEO Meta Tags**: Update document title and meta tags

---

**Happy coding! 🎉**
