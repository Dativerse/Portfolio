import { personalInfo } from './personal';

export const resumeData = {
  personal: {
    name: personalInfo.name,
    title: personalInfo.title,
    email: personalInfo.email,
    phone: personalInfo.phone,
    location: personalInfo.location,
    github: null,
    linkedin: personalInfo.social.linkedin,
    website: null,
  },

  // Professional summary for ATS keyword matching and HR quick scan
  summary: "Product Software Engineer with full-stack expertise spanning Back-end, Front-end, and DevOps. Experience ranges from legacy monolithic systems to modern monorepo architectures. Specialized in delivering end-to-end solutions for SaaS products and payment gateways. Selected as pioneer engineer at both companies to work on experimental projects with startup agility and product company standards. AWS certified with expertise in .NET, React, and microservices optimization.",

  education: [
    {
      institution: "University of Information Technology",
      degree: "Bachelor of Engineering, Software Engineering",
      location: "Ho Chi Minh City, Vietnam",
      graduationYear: "2023",
      startYear: "2019",
      gpa: null, // Add GPA if you want to display it
    }
  ],

  experience: [
    {
      company: "ConsultechAilab",
      position: "Software Engineer",
      location: "Dubai, United Arab Emirates",
      startDate: "Jul 2025",
      endDate: "Present",
      website: null,
      achievements: [
        "Engineered fullstack payment gateway platform serving 5+ countries with multi-currency support using .NET, React, and PostgreSQL",
        "Designed database schemas, data flows, and integrated third-party payment providers with team knowledge sharing for high availability",
        "Developed both customer-facing payment portal and internal admin dashboard, delivering end-to-end solutions",
        "Created internal tools, CLI commands, and AI agents for task automation to enhance development workflow"
      ]
    },
    {
      company: "Nexcel Solutions",
      position: "Fullstack Software Engineer",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Mar 2023",
      endDate: "Jul 2025",
      achievements: [
        "Selected as pioneer engineer to deliver experimental SaaS products with startup agility and product company standards; shipped 3 projects to production",
        "Worked on both client-side and back-office systems, delivering end-to-end solutions with good mindset for admins, clients, and full stack",
        "Migrated legacy products to modern .NET, created internal tools/scripts, and built smoke tests and load testing suites",
        "Operated in Agile methodology with Scrum, participating in sprint planning, daily standups, client sync meetings, and retrospectives"
      ]
    }
  ],

  // Skills formatted for inline display: "Category: item1, item2, item3"
  skills: [
    {
      category: "Frameworks",
      items: [".NET", "React", "Next.js", "Node.js", "Express", "Tailwind CSS", "REST APIs"]
    },
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "C#", "Go", "HTML", "CSS", "SQL"]
    },

    {
      category: "Databases & DevOps",
      items: ["PostgreSQL", "MySQL", "Redis", "AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      category: "Tools & Practices",
      items: ["Git", "Agile/Scrum", "Microservices", "System Design", "Unit Testing", "Pair Programming"]
    }
  ],

  projects: [
    {
      title: "Cashquora",
      description: "Payment gateway platform with multi-currency support, distributed database architecture, and AI-assisted development workflow",
      technologies: [".NET", "PostgreSQL", "Redis", "Kubernetes", "React", "AI Agents"],
      period: "Sep 2025 - Jan 2026",
      achievements: [
        "Developed fullstack payment gateway features with third-party provider integration serving 5+ countries",
        "Implemented distributed database architecture with PostgreSQL and Redis for high availability transactions",
        "Built customer-facing payment portal and internal admin dashboard for end-to-end transaction management",
        "Leveraged AI-assisted development flow with custom AI agents and CLI tools to accelerate delivery"
      ]
    },
    {
      title: "S1",
      description: "Microservices B2B product with domain-driven database separation, offering technology-agnostic solutions for non-technical customers",
      technologies: [".NET", "React", "Next.js", "Kubernetes", "Microservices", "Message Queues"],
      period: "Aug 2024 - Feb 2025",
      achievements: [
        "Built complete microservices architecture with comprehensive database separation following domain-driven design",
        "Integrated core business logic to other products via API and message queues, enabling cross-service communication",
        "Built internal tools and performed load testing to optimize system performance"
      ]
    },
    {
      title: "Licensee Admin Portal",
      description: "High-performance admin website for license management",
      technologies: [".NET Framework", ".NET 6", "React", "Webpack", "jQuery"],
      period: "Oct 2023 - Aug 2024",
      achievements: [
        "Migrated MVC to 3-layer architecture and separated codebase into micro-sites (SOA)",
        "Applied Micro Frontend architecture with React lazy-loading"
      ]
    }
  ],

  // Coding profiles displayed in 3-column layout
  codingProfiles: [
    // Uncomment and add your profiles:
    // { platform: "LeetCode", username: "yourusername", url: "https://leetcode.com/yourusername" },
    // { platform: "GitHub", username: "yourusername", url: "https://github.com/yourusername" },
    // { platform: "Codeforces", username: "yourusername", url: "https://codeforces.com/profile/yourusername" },
  ],

  // Certifications
  certifications: [
    "AWS Certified Developer - Associate (Dec 2024)",
    "AWS Certified Solutions Architect - Associate (Oct 2023)"
  ]
};
