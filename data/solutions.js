import { FaShoppingCart, FaRocket, FaCogs, FaUsers, FaLock, FaMobile } from 'react-icons/fa'

export const solutions = [
  {
    id: 1,
    title: 'E-Commerce Platforms',
    description: 'Build scalable online stores with payment processing, inventory management, and real-time order tracking. Complete solutions from product catalog to checkout.',
    icon: FaShoppingCart,
    color: 'bg-gradient-to-br from-primary to-accent-purple text-white',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redis', 'AWS S3'],
    features: [
      'Secure payment gateway integration',
      'Real-time inventory synchronization',
      'Shopping cart with session management',
      'Admin dashboard for order management',
      'Responsive mobile-first design'
    ]
  },
  {
    id: 2,
    title: 'Real-Time Applications',
    description: 'Develop interactive applications with live updates, chat systems, and collaborative features. WebSocket-based architecture for instant data synchronization.',
    icon: FaRocket,
    color: 'bg-gradient-to-br from-accent-cyan to-blue-600 text-white',
    stack: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Docker', 'Nginx'],
    features: [
      'Live chat and messaging systems',
      'Real-time notifications and alerts',
      'Collaborative editing and sharing',
      'Presence detection and status updates',
      'Scalable WebSocket connections'
    ]
  },
  {
    id: 3,
    title: 'Back-Office Systems',
    description: 'Build internal admin panels and management tools for business operations. Streamline workflows with custom dashboards, CRUD interfaces, and automation.',
    icon: FaCogs,
    color: 'bg-gradient-to-br from-accent-purple to-accent-pink text-white',
    stack: ['React', '.NET', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    features: [
      'Admin dashboards and control panels',
      'User and role management systems',
      'Internal workflow automation',
      'Reporting and data exports',
      'Audit logging and activity tracking'
    ]
  },
  {
    id: 4,
    title: 'Authentication Systems',
    description: 'Implement secure user authentication with OAuth, JWT, role-based access control, and multi-factor authentication. Enterprise-grade security solutions.',
    icon: FaLock,
    color: 'bg-gradient-to-br from-red-600 to-orange-600 text-white',
    stack: ['Next.js', 'OAuth 2.0', 'JWT', 'bcrypt', 'PostgreSQL', 'Redis'],
    features: [
      'Social login integration (Google, GitHub)',
      'JWT token-based authentication',
      'Role and permission management',
      'Password reset and email verification',
      'Session management and security'
    ]
  },
  {
    id: 5,
    title: 'Scalable Microservices',
    description: 'Architect and build distributed systems with independent, loosely-coupled services. Design for high availability, fault tolerance, and horizontal scaling.',
    icon: FaUsers,
    color: 'bg-gradient-to-br from-green-600 to-teal-600 text-white',
    stack: ['.NET', 'Docker', 'Kubernetes', 'RabbitMQ', 'Redis', 'PostgreSQL'],
    features: [
      'Service decomposition and domain boundaries',
      'API gateway and service discovery',
      'Message queues and event-driven architecture',
      'Containerized deployment with orchestration',
      'Distributed caching and data consistency'
    ]
  },
  {
    id: 6,
    title: 'Progressive Web Apps',
    description: 'Build mobile-first applications that work offline, send push notifications, and provide native app-like experiences. Cross-platform solutions with a single codebase.',
    icon: FaMobile,
    color: 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white',
    stack: ['React', 'Service Workers', 'IndexedDB', 'PWA', 'Workbox', 'Firebase'],
    features: [
      'Offline functionality with caching',
      'Push notification integration',
      'App-like navigation and gestures',
      'Install to home screen capability',
      'Background sync for data updates'
    ]
  }
]
