# EEGSS Website

**Professional website for the Electrical & Computer Engineering Graduate Student Society at McGill University**

Built with modern web technologies for exceptional performance, design, and maintainability.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```
   This creates optimized files in the `dist/` folder

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
EEGSS/
├── index.html          # Main HTML file
├── main.js             # JavaScript interactions
├── style.css           # Styles and animations
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies
├── public
      ├── logo/               # Logo images
      │     └── image1.jpg
      ├── project/            # Project images
      │     └── mcconnell-building.jpg
      └── social-events/      # Event images
            └── random.jpg
            └── event-1.jpeg
            └── event-2.jpeg
```
---


### Technical Features
- **TailwindCSS v4** for styling
-  **Vite** for blazing-fast builds
-  **Optimized assets** and lazy loading
-  **SEO-friendly** structure
-  **Security best practices**

---

## ✏️ How to Update Content

### Updating Text Content

**Edit `index.html`** - All content is clearly marked with comments:

1. **Hero Section** :
   - Change the main heading and description
   - Update call-to-action button text and links

2. **Resources Section** :
   - Update card titles, descriptions, and emojis
   - Change links to forms, social media, or email

3. **Events Section** :
   - Modify event descriptions and calls-to-action
   - Update event scheduling information

4. **Footer** :
   - Update copyright year
   - Change social media links

### Updating Images

1. **Logo**: Replace `/logo/image1.jpg`
2. **Hero Image**: Replace `/project/mcconnell-building.jpg`
3. **Events Image**: Replace `/social-events/random.jpg`

**Image Requirements:**
- Hero image: ~1200x900px (4:3 ratio)
- Event image: ~1600x1000px (16:10 ratio)
- Logo: Square or horizontal, ~200x200px minimum

### Updating Links

All important links are in `index.html`:

- **Lounge Access Form**: - `href="https://forms.gle/..."`
- **Instagram**:  - `href="https://www.instagram.com/..."`
- **Email**: - `href="mailto:..."`

### Updating Colors

Colors are defined in `tailwind.config.js`:

```javascript
brand: {
  50: "#e8f0f8",   // Lightest
  500: "#3e7bd8",  // Main brand color
  900: "#0c182c",  // Darkest
}
```

To change the color scheme:
1. Open `tailwind.config.js`
2. Update the hex values in the `brand` object
3. The site will automatically use the new colors

---

## 🌐 Deployment to GitHub Pages

### Option 1: Automatic (Recommended)

1. **Create `.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages
   - Select `gh-pages` branch as source
   - Save

### Option 2: Manual

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder to GitHub Pages**

---

## Customization Guide

### Adding New Sections

1. Add HTML in `index.html`:
   ```html
   <section id="new-section" class="py-16 md:py-24">
     <div class="text-center mb-12">
       <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
         <span class="gradient-text">New Section</span>
       </h2>
       <p class="text-foreground/70">Description here</p>
     </div>
   </section>
   ```

2. Add navigation link:
   ```html
   <a href="#new-section" class="nav-link">New Section</a>
   ```

### Adding Custom Animations

Add to `style.css`:

```css
@keyframes your-animation {
  from { /* starting state */ }
  to { /* ending state */ }
}

.your-class {
  animation: your-animation 1s ease-in-out;
}
```

### Changing Fonts

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your fonts
3. Update the `<link>` tag in `index.html`
4. Update font families in `tailwind.config.js`
---

## 🐛 Troubleshooting

### Development server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Images not showing
- Check file paths are correct
- Ensure images are in the correct folders
- Check file extensions (.jpg, .png, etc.)

### Styles not updating
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart dev server

### Build fails
```bash
# Check Node version
node --version  # Should be 18+

# Update dependencies
npm update
```

---

## 📞 Support

For questions or issues:
- Email: eegss.pgss@mail.mcgill.ca
- Instagram: [@mcgill.eegss](https://www.instagram.com/mcgill.eegss/)

---

## 📄 License

© 2025 EEGSS McGill. All rights reserved.

---


**Built with ❤️ for the McGill ECE Graduate Community by Adnaan**