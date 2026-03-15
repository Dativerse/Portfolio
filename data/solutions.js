import { FaChartLine, FaWallet, FaCogs, FaUsers, FaLock } from 'react-icons/fa'

export const solutions = [
  {
    id: 1,
    title: 'Prediction Market',
    description: 'Scalable prediction market platforms with high-volume transactions, real-time event data, and probability-based pricing. End-to-end from event markets to settlement.',
    icon: FaChartLine,
    color: 'bg-gradient-to-br from-primary to-accent-purple text-white',
    stack: ['React', '.NET', 'PostgreSQL', 'Kafka', 'Redis', 'Kubernetes'],
    features: [
      'Secure wallet and transaction processing',
      'Real-time event and probability data synchronization',
      'Market selection and session management',
    ]
  },
  {
    id: 2,
    title: 'Payment Wallet',
    description: 'Secure digital wallet systems with multi-currency support, real-time balance tracking, and seamless payment processing.',
    icon: FaWallet,
    color: 'bg-gradient-to-br from-accent-cyan to-blue-600 text-white',
    stack: ['React', '.NET', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
    features: [
      'Multi-currency wallet management',
      'Secure deposit and withdrawal flows',
      'Real-time balance and transaction updates',
      'Payment gateway integrations',
      'Transaction history and reporting',
      'Backoffice and operator portals for platform operations',
      'Scalable microservices architecture with event-driven processing'
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
  }
]
