# VeroKnows LLC Website Development Specification

## Overview

This document details the structure, features, and technical requirements for the **VeroKnows LLC** company website. The site is designed to be static, responsive, and visually modern, effectively communicating the company's vision, services, and client success stories.

## Company Introduction

**VeroKnows** is a premier education consulting firm specializing in **data-driven and AI-powered matching**.  
Our philosophy:
- Every student is unique.
- The best-fit school is not necessarily the "top-ranked," but the one that best matches the student's profile and aspirations.
- Leveraging data and artificial intelligence enables a more scientific, efficient, and human-centered approach to school selection.

## 1. Technical Stack

- **Framework:** Next.js (App Router, Static Site Generation)
- **Styling:** Tailwind CSS (utility-first, responsive design)
- **Component Libraries:** Headless UI, Lucide Icons, Heroicons
- **Animation:** Framer Motion (for smooth, modern transitions)
- **Fonts:** Inter (primary, via @fontsource/inter)
- **Hosting:** Vercel (preferred), with support for Netlify or GitHub Pages
- **Version Control:** Git (GitHub)

## 2. Design & User Experience

- **Color Palette:** Professional, clean (blue, white, gray)
- **Typography:** Modern sans-serif (Inter)
- **Layout:** Responsive, mobile-first, optimized for all screen sizes
- **Components:** 
  - Sticky/fixed header with logo and navigation
  - Footer with copyright, navigation, contact, and social links
  - Cards, buttons, and sections with clear spacing and hover effects
- **Accessibility:** 
  - Semantic HTML5
  - Alt attributes for all images
  - Sufficient color contrast
  - Keyboard navigability

## 3. Site Structure

### 3.1 Navigation

- Persistent header with navigation links:
  - Home
  - Study Abroad
  - Research Services
  - About

### 3.2 Pages

#### Home
- **Hero Banner:** Logo, tagline, and call-to-action (CTA)
- **Company Vision:** Mission and values
- **Services Overview:** Cards for Study Abroad Consulting and Research Collaboration & Support
- **Testimonials:** Client quotes with names and (optional) photos/titles
- **Contact Teaser:** Prompt to get in touch

#### Study Abroad
- Overview of consulting services
- Countries and universities covered
- Application and interview preparation
- Student success stories
- Highlight of data and AI-driven methodology

#### Research Services
- Types of research collaboration
- Academic and technical fields covered
- Support services (editing, project guidance, etc.)

#### About
- Company background and mission
- Unique AI + data-driven approach
- Team introduction (placeholder)
- Company history/timeline (placeholder)
- Contact information

### 3.3 Footer

- Copyright notice (e.g., `© 2025 VeroKnows LLC`)
- Navigation links
- Social media icons (if available)
- Contact email

## 4. Performance & SEO

- **Performance:**
  - Static build for fast load times
  - Image optimization (Next.js `Image` component)
  - Lazy loading and code splitting
- **SEO:**
  - SEO-friendly routes and metadata
  - Open Graph tags for social sharing
  - Semantic HTML5 structure

## 5. Deployment

- **Preferred:** Vercel with Next.js static export
- **Version Control:** GitHub repository
- **CI/CD:** Automatic deployment from Git

## 6. Future Enhancements (Optional)

- Blog or News section
- Multi-language support (e.g., `next-i18next`)
- Contact form with backend integration (e.g., Formspree, Resend)

**This specification ensures the VeroKnows website is modern, performant, accessible, and ready for future growth.**
