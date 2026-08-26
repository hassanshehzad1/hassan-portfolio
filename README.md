# Hassan Shehzad - Personal Portfolio Website

A production-grade personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed for a Full Stack Software Engineer focused on backend systems, AI-powered applications, and automation.

## Features

- **Premium Dark-First Design**: Modern, professional aesthetic with subtle animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Data-Driven Architecture**: Content managed through structured TypeScript data files
- **Dynamic Project Filtering**: Filter projects by category with search functionality
- **Case Study Pages**: Detailed project case studies for featured work
- **Certification Showcase**: Filterable certification display with verification links
- **Skills Visualization**: Categorized skills with proficiency indicators
- **Experience Timeline**: Professional timeline of work experience
- **Contact Form**: Functional contact form with validation
- **Theme Support**: Dark mode by default with light mode toggle
- **SEO Optimized**: Complete metadata, Open Graph, and structured data
- **Accessibility**: WCAG-compliant with keyboard navigation and screen reader support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── projects/          # Project case study pages
│   │   │   └── [slug]/        # Dynamic case study routes
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   └── not-found.tsx      # 404 page
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeProvider.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                # Reusable UI components
│   ├── data/                  # Content data files
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── certifications.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   ├── achievements.ts
│   │   └── services.ts
│   ├── lib/                   # Utility functions
│   │   └── utils.ts
│   └── types/                 # TypeScript type definitions
│       └── portfolio.ts
├── public/                    # Static assets
│   ├── images/
│   │   ├── projects/
│   │   ├── certificates/
│   │   └── resume/
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Updating Profile Information

Edit the data files in `src/data/`:

- **profile.ts**: Name, title, about text, social links
- **projects.ts**: Add or update projects
- **experience.ts**: Work experience timeline
- **certifications.ts**: Certifications and credentials
- **skills.ts**: Technical skills with proficiency levels
- **education.ts**: Educational background
- **achievements.ts**: Awards and achievements
- **services.ts**: Services offered

### Adding Projects

1. Add project data to `src/data/projects.ts`:
```typescript
{
  id: "project-slug",
  slug: "project-slug",
  title: "Project Title",
  shortDescription: "Brief description",
  description: "Full description",
  category: ["Full Stack", "Backend"],
  featured: true,
  technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  image: "/images/projects/project.png",
  github: "https://github.com/username/repo",
  liveUrl: "https://project-demo.com",
  caseStudy: true,
  caseStudyData: {
    problem: "Problem statement",
    solution: "Solution description",
    architecture: "Architecture details",
    keyFeatures: ["Feature 1", "Feature 2"],
    engineeringChallenges: ["Challenge 1"],
    integrations: ["API 1"],
  }
}
```

2. Add project image to `public/images/projects/`

3. For case studies, the page will be automatically generated at `/projects/[slug]`

### Adding Resume

1. Place your resume PDF in `public/resume/Hassan-Shehzad-Resume.pdf`
2. Update the email in `src/data/profile.ts`

### Contact Form Integration

The contact form currently simulates submission. To integrate with an email service:

1. Choose a service (Resend, SendGrid, Formspree, etc.)
2. Add environment variables (create `.env.local`):
```env
CONTACT_FORM_ENDPOINT=your-endpoint-url
CONTACT_FORM_API_KEY=your-api-key
```
3. Update the form submission logic in `src/components/sections/Contact.tsx`

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## Deployment

### Netlify Deployment

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo>
git push -u origin main
```

2. **Deploy to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Environment Variables** (if needed):
   - Add any required environment variables in Netlify site settings

### Custom Domain (Optional)

1. In Netlify, go to Domain settings
2. Add your custom domain
3. Update DNS records as instructed by Netlify

## Environment Variables

No environment variables are required for basic functionality. Optional variables for contact form integration:

```env
# Contact Form (optional)
CONTACT_FORM_ENDPOINT=your-endpoint-url
CONTACT_FORM_API_KEY=your-api-key
```

## Performance

The site is optimized for:
- Fast initial load with Next.js static generation
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- Excellent Core Web Vitals

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where appropriate
- Focus indicators
- Color contrast compliance
- Screen reader friendly
- Reduced motion support

## SEO

- Optimized meta tags and descriptions
- Open Graph metadata
- Twitter Card metadata
- Structured data (JSON-LD)
- Sitemap ready
- robots.txt ready

## License

This project is for personal portfolio use. Feel free to use it as a template for your own portfolio.

## Support

For issues or questions, please open an issue on GitHub or contact via the contact form on the website.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
