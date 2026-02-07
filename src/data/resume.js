import { personalInfo } from './personal';

export const resumeData = {
  personal: {
    name: personalInfo.name,
    title: personalInfo.title,
    email: personalInfo.email,
    phone: personalInfo.phone,
    location: personalInfo.location,
    github: personalInfo.social.github,
    linkedin: personalInfo.social.linkedin,
    website: null,
  },

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
      position: "Senior Software Engineer",
      location: "Dubai, United Arab Emirates",
      startDate: "Jul 2025",
      endDate: "Present",
      website: null,
      achievements: [
        "Developed fullstack solutions serving customers across multiple countries",
        "Integrated multiple payment providers and optimized transaction processing workflows"
      ]
    },
    {
      company: "Nexcel Solutions",
      position: "Fullstack Software Engineer",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Mar 2023",
      endDate: "Jul 2025",
      achievements: [
        "Selected for pioneers team to deliver high-risk, experimental projects with tight deadlines",
        "Architected migration from monolithic MVC to service-oriented architecture, enhancing scalability and maintainability",
        "Modernized legacy frontend by transforming into SPA with code-splitting and lazy-loading",
      ]
    }
  ],

  // Skills formatted for inline display: "Category: item1, item2, item3"
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "C#", "Go", "HTML", "CSS", "SQL"]
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "Node.js", "Express", ".NET", "Tailwind CSS", "Scss"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Linux"]
    }
  ],

  projects: [
    {
      title: "Cashquora",
      description: "Payment gateway platform serving customers across multiple countries",
      technologies: [".NET", "PostgreSQL", "Redis", "Kubernetes", "React"],
      period: "Sep 2025 - Present",
      achievements: [
        "Developed fullstack payment processing features with multi-provider integration",
        "Optimized transaction workflows for reliability and performance at scale"
      ]
    },
    {
      title: "S1",
      description: "Experimental B2B product offering technology-agnostic solutions for non-technical customers",
      technologies: [".NET", "React", "Next.js", "Kubernetes", "Microservices"],
      period: "Aug 2024 - Feb 2025",
      achievements: [
        "Integrated core business logic to other products via API and message queues, enabling new use cases and revenue streams",
        "Built internal tools, wrote load tests to ensure reliability, and implemented monitoring for production stability"
      ]
    },
    {
      title: "License Admin Portal",
      description: "High-performance admin website utilizing JavaScript and .NET",
      technologies: [".NET Framework", ".NET 6", "React", "Webpack", "jQuery"],
      period: "Oct 2023 - Aug 2024",
      achievements: [
        "Migrated MVC to 3-layer architecture and separated codebase into micro-sites (SOA)",
        "Applied Micro Front-end architecture with React lazy-loading"
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
