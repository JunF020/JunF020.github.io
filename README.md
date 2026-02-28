# Corban Construction Ltd - Website Documentation

## Overview
Modern, responsive website for Corban Construction Ltd with advanced features, accessibility, and SEO optimization.

## Features Implemented

### 1. Design & UI
- Modern gradient-based design with professional color scheme
- Fully responsive layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Cookie consent banner for GDPR compliance
- Back to top button

### 2. Navigation & Accessibility
- Fixed header with scroll effects
- Mobile hamburger menu with click-outside close
- Smooth scrolling for anchor links
- Skip to main content link
- ARIA labels and roles throughout
- Keyboard navigation support
- Focus visible states

### 3. Hero Slider
- Auto-playing image slider with 3 slides
- Manual navigation (prev/next buttons)
- Clickable indicators
- Keyboard navigation (arrow keys)
- Touch/swipe support for mobile
- Pause on hover

### 4. Projects Section
- Filterable project grid (All, Under Construction, Completed, Pavements, Roads)
- Horizontal scroll on mobile for filters
- Clickable project cards
- Lazy loading images
- Proper alt text

### 5. Gallery Section (NEW)
- Lightbox2 integration for image viewing
- Filterable gallery categories
- Responsive grid layout
- Hover effects with zoom icons

### 6. Contact Form
- Comprehensive validation (required fields, email format, phone format)
- Real-time error messages
- Honeypot field for spam protection
- Loading states
- Success/error messages
- Privacy policy checkbox

### 7. Performance Optimizations
- Lazy loading for images
- Preconnect for external resources
- Critical CSS inline
- Service Worker for offline capability
- Optimized animations (reduced motion support)

### 8. SEO & Meta
- Meta descriptions for each section
- Open Graph tags for social sharing
- Twitter Card meta tags
- Canonical URLs
- JSON-LD structured data
- XML Sitemap
- robots.txt

### 9. Security
- Content Security Policy ready
- XSS protection through input sanitization
- Form validation on client side
- HTTPS ready

### 10. Additional Pages
- 404 error page with construction theme
- Project detail page template
- robots.txt
- sitemap.xml

## File Structure
```
/
├── index.html          # Main homepage
├── 404.html           # Error page
├── project-detail.html # Project detail template
├── styles.css         # Main stylesheet
├── script.js          # Main JavaScript
├── sw.js              # Service Worker
├── robots.txt         # Search engine instructions
├── sitemap.xml        # XML sitemap
└── README.md          # This file
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11 (basic support)

## Installation
1. Upload all files to your web server
2. Ensure HTTPS is enabled
3. Update Google Maps embed URL with your actual API key if needed
4. Update contact information in index.html
5. Replace placeholder images with actual project photos

## Customization

### Colors
Edit CSS variables in `:root`:
```css
--primary-color: #e67e22;
--secondary-color: #2c3e50;
--accent-color: #16a085;
```

### Projects
Update the `projects` array in `script.js`:
```javascript
{
    id: 1,
    title: 'Project Name',
    category: 'completed',
    location: 'City, Country',
    image: 'path/to/image.jpg',
    description: 'Project description'
}
```

### Contact Information
Update in `index.html`:
- Address
- Phone numbers
- Email addresses
- Office hours
- Social media links

## Performance Tips
1. Optimize images (compress, use WebP format)
2. Enable Gzip compression on server
3. Use a CDN for assets
4. Minify CSS and JS for production
5. Enable browser caching

## Accessibility Features
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Color contrast compliance
- Screen reader support
- Reduced motion support

## Credits
- Font Awesome for icons
- Google Fonts (Montserrat, Open Sans)
- Lightbox2 for gallery functionality
- Unsplash for placeholder images

## License
© 2025 Corban Construction Ltd. All Rights Reserved.
