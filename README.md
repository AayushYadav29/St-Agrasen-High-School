# 🎓 St. Agrasen High School & Jr. College Website

A modern, production-ready school website for St. Agrasen High School & Jr. College of Arts, Commerce & Science, Thane. Built with React, Vite, and TailwindCSS featuring iOS 26-inspired glassmorphism design.

**Managed by**: Kamlabai Education Trust (KECT)  
**Part of**: Agrawal Group of Institute (AGI)  
**Location**: Nirmla Devi Dighe Nagar, Kalwa East, Thane 400605, Maharashtra

## ✨ Features

### Design
- **iOS 26-Inspired UI**: Ultra-glassy surfaces with frosted blur effects
- **Glassmorphism**: Transparent cards with depth layers and soft neon glows
- **Modern Gradients**: Dynamic color schemes with smooth transitions
- **Dark Mode**: iOS-style toggle with persistent theme
- **Fully Responsive**: Optimized for phones, tablets, and desktops
- **Smooth Animations**: Powered by Framer Motion

### Pages

#### 🏠 Home Page
- Hero section with large glass panel
- Quick navigation cards
- Animated announcement ticker
- "Why Choose Us" section with animated icons
- Testimonials carousel

#### 📝 Admissions Page
- Admission criteria by class
- Online admission form with validation
- Document upload option
- Application status checker
- Auto-generated application ID
- Data saved to localStorage (mock API)

#### 💰 Fees Structure Page
- Glassy table with fee breakdown
- Class filter (Nursery to 12th)
- Displays:
  - Admission fees
  - Tuition fees
  - Transport fees
  - Activity fees
- Download PDF button
- Payment options and scholarship info

#### 🏫 Facilities Page
- Grid of facility cards
- Interactive hover animations
- Detailed modal for each facility
- Facilities include:
  - Smart Classrooms
  - Science Labs
  - Sports Complex
  - Library
  - Transport
  - Hostel
  - Music Room
  - Art Studio

#### 📞 Contact Page
- Contact information cards
- Contact form with validation
- Google Maps embed
- School timings section
- Glass footer

### Additional Features
- **Sticky Glass Navbar**: Transparent navigation with blur effect
- **Floating Action Button**: Quick contact widget
- **Page Transitions**: Smooth animations between routes
- **SEO Optimized**: Meta tags included
- **Mobile-First**: Performance optimized

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Navigate to project directory**
```bash
cd st-agrasen-school-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🌐 Deploy

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist` folder to Netlify dashboard.

## 📁 Project Structure

```
glassmorph-school-website/
├── src/
│   ├── components/
│   │   ├── GlassCard.jsx          # Reusable glass card component
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── Footer.jsx             # Footer component
│   │   ├── FloatingActionButton.jsx
│   │   ├── AnnouncementTicker.jsx
│   │   └── TestimonialCarousel.jsx
│   ├── pages/
│   │   ├── Home.jsx               # Home page
│   │   ├── Admissions.jsx         # Admissions page
│   │   ├── Fees.jsx               # Fees structure page
│   │   ├── Facilities.jsx         # Facilities page
│   │   └── Contact.jsx            # Contact page
│   ├── context/
│   │   └── ThemeContext.jsx       # Dark mode context
│   ├── data/
│   │   ├── fees.json              # Fees data
│   │   ├── testimonials.json      # Testimonials data
│   │   └── announcements.json     # Announcements data
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
└── README.md
```

## 🎨 Key Components

### GlassCard Component
Reusable glassmorphism card with props:
- `children`: Content
- `className`: Additional classes
- `hover`: Enable hover animation (default: true)
- `neon`: Enable neon glow effect (default: false)

```jsx
<GlassCard className="p-6" neon>
  <h2>Content</h2>
</GlassCard>
```

### Theme Context
Dark mode management with localStorage persistence:
```jsx
const { isDark, toggleTheme } = useTheme()
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize colors:
```js
colors: {
  glass: {
    light: 'rgba(255, 255, 255, 0.1)',
    dark: 'rgba(0, 0, 0, 0.2)',
  },
}
```

### Glassmorphism Effect
Modify in `src/index.css`:
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Data
Update JSON files in `src/data/`:
- `fees.json` - Fee structure
- `testimonials.json` - Parent testimonials
- `announcements.json` - School announcements

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance

- Lazy loading for images
- Code splitting
- Optimized animations
- Minimal bundle size

## 📝 Form Handling

The admission form saves data to localStorage. In production, replace with actual API:

```jsx
// In src/pages/Admissions.jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  // Replace with actual API call
  const response = await fetch('/api/admissions', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}
```

## 🎨 Logo

The project uses a simple text-based logo. To add a custom logo:

1. Add your logo file to `public/logo.svg`
2. Update the navbar in `src/components/Navbar.jsx`

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Contributing

Contributions welcome! Feel free to submit issues and pull requests.

## 📧 Support

For questions or support, contact: info@glassmorphacademy.edu

---

Built with ❤️ using React + Vite + TailwindCSS
