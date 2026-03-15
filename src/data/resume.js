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
  summary: "Product Software Engineer with 3+ years of experience building scalable web applications and payment systems. Skilled in improving and refactoring microservices architectures, optimizing legacy codebases, and leveraging AI-assisted development workflows to enhance productivity. AWS certified with expertise in React and .NET.",

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
        "Integrated with third-party providers reducing payment failures by implementing retry logic and fallback mechanisms",
        "Developed and maintained both customer-facing payment portal and internal admin dashboard, enabling end-to-end transaction management",
        "Enhanced development workflow by creating custom CLI commands, building AI agents for task automation, and integrating AI-assisted features into projects"
      ]
    },
    {
      company: "Nexcel Solutions",
      position: "Fullstack Software Engineer",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Mar 2023",
      endDate: "Jul 2025",
      achievements: [
        "Selected for pioneers team to deliver high-risk, experimental products; successfully shipped 3 projects to production",
        "Migrated monolithic MVC to microservices architecture, reducing deployment time by 60% and enabling independent team scaling",
        "Modernized legacy jQuery frontend to React SPA with code-splitting, reducing initial load time by 40% and improving Core Web Vitals",
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
      items: ["Git", "Agile/Scrum", "Microservices", "System Design", "Unit Testing", "Performance Optimization"]
    }
  ],

  projects: [
    {
      title: "Cashquora",
      description: "Payment gateway platform serving customers across multiple countries",
      technologies: [".NET", "PostgreSQL", "Redis", "Kubernetes", "React"],
      period: "Sep 2025 - Jan 2026",
      achievements: [
        "Developed fullstack payment features with third-party provider integration",
        "Built and maintained customer-facing portal and internal admin dashboard"
      ]
    },
    {
      title: "S1",
      description: "Experimental B2B product offering technology-agnostic solutions for non-technical customers",
      technologies: [".NET", "React", "Next.js", "Kubernetes", "Microservices"],
      period: "Aug 2024 - Feb 2025",
      achievements: [
        "Integrated core business logic to other products via API and message queues, enabling new use cases",
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
