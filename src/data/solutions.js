import { FaShoppingCart, FaRocket, FaChartLine, FaUsers, FaLock, FaMobile } from 'react-icons/fa'

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
    stack: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL', 'Docker', 'Nginx'],
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
    title: 'Data Dashboards & Analytics',
    description: 'Create powerful data visualization platforms with interactive charts, real-time metrics, and custom reporting. Transform complex data into actionable insights.',
    icon: FaChartLine,
    color: 'bg-gradient-to-br from-accent-purple to-accent-pink text-white',
    stack: ['React', 'D3.js', 'GraphQL', 'Node.js', 'TimescaleDB', 'Redis'],
    features: [
      'Interactive data visualizations',
      'Custom report generation',
      'Real-time metrics and KPIs',
      'Data export and API integration',
      'Role-based access control'
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
    title: 'RESTful & GraphQL APIs',
    description: 'Design and develop robust APIs with proper documentation, versioning, and rate limiting. Build the backbone for mobile apps and third-party integrations.',
    icon: FaUsers,
    color: 'bg-gradient-to-br from-green-600 to-teal-600 text-white',
    stack: ['Express', 'GraphQL', 'REST', 'Swagger', 'MongoDB', 'Docker'],
    features: [
      'RESTful API design and implementation',
      'GraphQL schema design and resolvers',
      'API documentation with Swagger',
      'Rate limiting and throttling',
      'Comprehensive error handling'
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
