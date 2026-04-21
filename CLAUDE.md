# CLAUDE.md - Portfolio Project Implementation Guide

## Project Overview
Portfolio website for Dom Vournias using Gatsby.js, integrating client projects and personal work showcasing full-stack development expertise. Currently advanced to Full-stack Developer role.

## Tech Stack Analysis

### Current Stack (Production-Ready)
- **Gatsby.js** - Static site generator with React
- **Tailwind CSS** - Utility-first styling
- **styled-components** - Component-level CSS
- **WordPress** - Headless CMS via GraphQL
- **Framer Motion** - Animations
- **gatsby-plugin-image**, **gatsby-transformer-sharp** - Image optimization

### Recommended Enhancements
- **Bundle Analysis**: `gatsby-plugin-webpack-bundle-analyser-v2`
- **PWA Support**: `gatsby-plugin-offline`
- **SVG Optimization**: `gatsby-plugin-svgr`
- **TypeScript**: For larger projects
- **Full-stack Focus**: Emphasize backend, API, and database expertise

## Project Structure Implementation

### Templates (src/templates/)
1. **Layout.js** - Main layout with animations
2. **project-details.js** - Individual project pages
3. **SinglePost.js** - Blog post templates

### Components (src/components/)
- **Buttons/** - Reusable button components
- **Cards/** - Project and content cards
- **Navbar/** - Navigation system
- **Footer/** - Site footer sections
- **Hero/** - Landing/hero sections
- **Seo.js** - SEO metadata

## Client Projects Integration

### 1. damigrowth/nextjs (doulitsa.gr) - Client Project
**Role**: Full-stack Developer (Lead Developer)

**Integration Strategy:**
- Create project-details template entry
- Add project data to WordPress or local source
- Showcase as featured client work

**Project Details:**
- Client: doulitsa.gr
- Tech: Next.js, TypeScript, Supabase, Stripe
- Status: Live production platform (7+ years)
- Use case: Portfolio showcase
- **Highlight**: Full-stack development with complete marketplace ecosystem

**Project Overview:**
- Comprehensive Greek freelancer marketplace platform
- Connects freelancers, companies, and service consumers
- Full lifecycle: job postings → messaging → payments → ratings
- Lead developer role for 7+ years

### 2. DomVournias/vidrepair - Personal Project
**Integration Strategy:**
- Enhance with comprehensive README
- Add screenshots and demo links
- Include in personal projects section
- Show full-stack capabilities
- Highlight leadership and full-stack implementation

**Project Enhancement Needed:**
- Add project documentation
- Include live demo links
- Showcase technologies used
- Add before/after comparisons
- Emphasize full-stack development aspects

### 3. DomVournias/Environmental-Consulting-Agency-Nextjs - Client Project
**Status**: Repository not found (404)
**Action**: Verify repository URL or recreate project
**Integration Strategy** (when available):
- Full-stack Next.js with WordPress/GraphQL
- Showcase advanced integration capabilities
- Highlight modern frontend with traditional CMS

## Portfolio Features Implementation

### Projects Section
Create data structure for projects:
```javascript
{
  title: "Project Name",
  client: "Client Name",
  technologies: ["React", "Next.js", "GraphQL"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/...",
  image: "path/to/image",
  description: "Project description",
  stack: ["stack1", "stack2", "stack3"],
  role: "Full-stack Developer",
  highlights: ["Leadership", "Full-stack implementation", "Performance optimization"]
}
```

### Blog Integration
- Use existing SinglePost.js template
- Leverage WordPress as headless CMS
- MDX support for rich content
- Highlight full-stack development topics

## Development Workflow

### Content Updates
1. **Client Projects**: Add to WordPress or local content folder
2. **Blog Posts**: Create MDX files in src/blogposts/
3. **Images**: Organize in src/images/ with proper naming

### Building & Deployment
- `npm run develop` - Local development
- `npm run build` - Production build
- `npm run serve` - Preview production build

## Skills Alignment (Full-Stack Focus)

Based on LinkedIn history and current role:
- **React.js & Next.js** - Full-stack portfolio showcases
- **GraphQL** - API integration examples (multiple projects)
- **TypeScript** - Type-safe development across projects
- **Full-Stack Architecture** - Complete ownership from frontend to database
- **Performance Optimization** - Production experience at scale
- **Backend & API Development** - Server Actions, GraphQL integration
- **Database Design** - Supabase, PostgreSQL, schema design
- **Payment Integration** - Stripe, Eurobank implementations

### Emphasize These Areas:
- Complete product ownership
- API and backend development
- Database architecture
- Performance optimization at scale
- Leadership in full-stack implementation
- Cross-platform integration (web, mobile considerations)

## Testing Strategy

### Manual Testing
- Verify all project pages render correctly
- Test image optimization
- Check SEO metadata
- Validate responsive design
- Test full functionality (not just UI)

### Build Verification
- Test production build locally
- Verify all links work
- Check page load performance
- Validate API integrations

## Deployment Checklist

- [ ] All project templates functional
- [ ] Images optimized and loading
- [ ] SEO metadata complete
- [ ] Blog posts integrated
- [ ] Client projects showcased
- [ ] Performance testing complete
- [ ] Mobile responsiveness verified
- [ ] Full-stack capabilities demonstrated
- [ ] Leadership and architecture examples included

## Next Steps

1. **Add Client Projects**: Integrate damigrowth/nextjs as featured project with full-stack emphasis
2. **Enhance Personal Projects**: Improve vidrepair with comprehensive documentation
3. **Verify Repository**: Check Environmental-Consulting-Agency-Nextjs URL
4. **Content Migration**: Move existing content to proper structure
5. **Performance Optimization**: Add bundle analysis and implement improvements
6. **Update Portfolio Focus**: Ensure full-stack development is prominently featured
7. **Add Backend Examples**: Include API design, database schema, and server-side logic examples