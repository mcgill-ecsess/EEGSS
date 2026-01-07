```markdown
# EEGSS Website

Professional website for the Electrical & Computer Engineering Graduate Student Society at McGill University.

## Prerequisites

- Node.js v18+
- npm

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Access at `http://localhost:5173`

## Build

Create production build:

```bash
npm run build
```

Output in `dist/` folder.

Preview production build:

```bash
npm run preview
```

## Project Structure

```
EEGSS/
├── index.html              # Main page
├── events.html             # Events page
├── logo/                   # Logo assets
│   ├── eegss.png
│   └── word-logo.png
├── project/                # Project images
│   ├── mcconnell-building.jpg
│   ├── lounge-access.png
│   ├── instagram.png
│   └── get-in-touch.png
├── social-events/          # Event images
│   ├── random.jpg
│   ├── event-1.jpeg
│   └── event-2.jpeg
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Vite
- TailwindCSS v4

## Content Updates

### Text

Edit content directly in `index.html` and `events.html`.

### Images

Replace files in respective folders:
- Logos: `logo/`
- Project images: `project/`
- Event photos: `social-events/`

Recommended dimensions:
- Hero image: 1200x900px
- Event images: 1600x1000px
- Logos: 200x200px minimum

### Links

Update URLs in HTML files:
- Lounge form: `https://forms.gle/Je68JiBsn4a4686f8`
- Instagram: `https://www.instagram.com/mcgill.eegss/`
- Email: `eegss.pgss@mail.mcgill.ca`

### Colors

Edit `tailwind.config.js` brand palette:

```javascript
brand: {
  50: "#e8f0f8",
  500: "#3e7bd8",  // Primary brand color
  900: "#0c182c",
}
```

## Troubleshooting

**Server won't start:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Images not loading:**
- Verify file paths
- Check file extensions match
- Ensure files exist in correct folders

**Styles not updating:**
- Hard refresh: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart dev server

**Build errors:**
```bash
node --version  # Verify v18+
npm update
```

## Contact

- Email: eegss.pgss@mail.mcgill.ca
- Instagram: [@mcgill.eegss](https://www.instagram.com/mcgill.eegss/)

## License

© 2025 EEGSS McGill. All rights reserved.
```