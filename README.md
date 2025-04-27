# Haarstudio Schönheit - Modern Hair Salon Website

![Project Preview](public/images/salon-preview.jpg)

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Customization](#customization)
- [Deployment](#deployment)
- [Booking Integration](#booking-integration)
- [License](#license)

## Features
- � **Blazing Fast**: Built with Vite for optimal performance
- ✂ **Service Showcase**: Beautiful display of hair services
- 👥 **Team Section**: Introduce your stylists
- 📸 **Gallery**: Showcase your best work
- 💬 **Testimonials**: Build trust with client reviews
- 📅 **Booking CTA**: Prominent booking buttons throughout
- 🇩🇪 **German Language**: Fully localized content

## Technologies
- **Frontend**:
  - React 18
  - TypeScript
  - Vite
  - Framer Motion
  - React Icons
- **Styling**:
  - Pure CSS (no Tailwind)
  - CSS Variables for theming
  - Responsive design

## Project Structure
```bash
hair-salon/
├── public/
│   ├── images/              # All website images
│   └── index.html           # Main HTML file
├── src/
│   ├── components/          # All React components
│   │   ├── BookingBanner.tsx
│   │   ├── BookingBanner.css
│   │   ├── Footer.tsx
│   │   ├── Footer.css
│   │   ├── Gallery.tsx
│   │   ├── Gallery.css
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── Hero.tsx
│   │   ├── Hero.css
│   │   ├── Services.tsx
│   │   ├── Services.css
│   │   ├── Team.tsx
│   │   ├── Team.css
│   │   ├── Testimonials.tsx
│   │   └── Testimonials.css
│   ├── pages/
│   │   └── Home.tsx         # Main page composition
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│   └── App.css              # Additional styles
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
