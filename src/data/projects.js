export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, product management, and real-time inventory tracking. Built with modern technologies for optimal performance and user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    image: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Includes drag-and-drop functionality and customizable workflows.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    image: "/projects/task-app.jpg",
    githubUrl: "https://github.com/yourusername/task-management",
    liveUrl: "https://task-app-demo.com",
    category: "frontend"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with data visualization, scheduled posts, and engagement tracking across multiple platforms.",
    technologies: ["React", "TypeScript", "Chart.js", "REST API", "Material-UI"],
    image: "/projects/dashboard.jpg",
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://dashboard-demo.com",
    category: "frontend"
  },
  {
    id: 4,
    title: "RESTful API Service",
    description: "Scalable REST API with authentication, rate limiting, and comprehensive documentation. Includes automated testing and CI/CD pipeline integration.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    image: "/projects/api.jpg",
    githubUrl: "https://github.com/yourusername/rest-api",
    liveUrl: null,
    category: "backend"
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "Feature-rich chat application with real-time messaging, file sharing, and video calling capabilities. Supports group chats and direct messaging.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
    image: "/projects/chat.jpg",
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-demo.com",
    category: "fullstack"
  },
  {
    id: 6,
    title: "Portfolio Website Builder",
    description: "Drag-and-drop portfolio builder with customizable templates, SEO optimization, and one-click deployment. Perfect for creators and professionals.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: "/projects/builder.jpg",
    githubUrl: "https://github.com/yourusername/portfolio-builder",
    liveUrl: "https://builder-demo.com",
    category: "fullstack"
  }
]

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' }
]
