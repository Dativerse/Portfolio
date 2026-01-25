# Victor Nguyen - Full Stack Software Engineer Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Dark Mode**: Toggle between light and dark themes with persistent storage
- **Smooth Animations**: Page scroll animations using Framer Motion and Intersection Observer
- **Responsive Design**: Fully responsive across all devices
- **Contact Form**: Integrated with EmailJS for sending messages
- **Project Showcase**: Filterable project gallery
- **Skills Display**: Animated skill progress bars
- **SEO Optimized**: Meta tags and Open Graph support

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: EmailJS
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your EmailJS credentials from https://www.emailjs.com/

4. Start the development server:
```bash
npm run dev
```

5. Open http://localhost:5173 in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

### Personal Information

Update your personal details in:
- `src/data/personal.js` - Name, bio, social links, etc.
- `src/data/projects.js` - Your projects
- `src/data/skills.js` - Your skills and proficiency levels

### Images

- Add your profile photo to `/public` or `/src/assets`
- Add project screenshots to `/public/projects/`
- Update image paths in the data files

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail recommended)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

### Colors and Theme

Customize colors in `tailwind.config.js`:
- Primary colors
- Dark mode colors
- Animations

## Project Structure

```
Portfolio/
├── public/
│   └── projects/              # Project screenshots
├── src/
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Hero, About, Projects, Skills, Contact
│   │   └── ui/                # Reusable UI components
│   ├── context/               # Theme context
│   ├── hooks/                 # Custom hooks
│   ├── data/                  # Data files
│   ├── utils/                 # Utilities
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify](https://www.netlify.com/)
3. Add environment variables in Netlify dashboard

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
```json
"deploy": "vite build && gh-pages -d dist"
```
3. Run: `npm run deploy`

## License

MIT License - see LICENSE file for details

## Contact

For questions or feedback, please reach out through the contact form on the website.