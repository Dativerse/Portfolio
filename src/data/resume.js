import { personalInfo } from './personal';
import { skillCategories } from './skills';
import { projects } from './projects';

export const resumeData = {
  personal: {
    name: personalInfo.name,
    title: personalInfo.title,
    email: personalInfo.email,
    location: personalInfo.location,
    github: personalInfo.social.github,
    linkedin: personalInfo.social.linkedin,
  },

  summary: "Professional Full Stack Software Engineer with expertise in delivering end-to-end solutions with cost efficiency. Specialized in architecting scalable web applications that maximize value while minimizing overhead. Strong background in modern web technologies, cloud infrastructure, and DevOps practices.",

  experience: [
    {
      company: "ConsultechAilab",
      position: "Senior Software Engineer",
      location: "Dubai, United Arab Emirates",
      startDate: "Jul 2025",
      endDate: "Present",
      projects: [
        {
          name: "Cashquora",
          role: "Fullstack Product Engineer",
          period: "Sep 2025 - Present",
          teamSize: 10,
          description: "Payment gateway project delivering seamless payment solutions for customers.",
          techStack: [".NET", "PostgreSQL", "Redis", "Kubernetes", "React"],
          achievements: [
            "Delivered end-to-end fullstack solutions to customers",
            "Developed and maintained payment processing features",
            "Integrated with multiple payment providers and services"
          ]
        }
      ]
    },
    {
      company: "Nexcel Solutions",
      position: "Fullstack Software Engineer",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Mar 2023",
      endDate: "Jun 2025",
      website: "https://nexcel.com",
      projects: [
        {
          name: "S1",
          role: "Fullstack Developer",
          period: "Aug 2024 - Feb 2025",
          teamSize: 25,
          description: "Experimental B2B product offering a seamless, technology-agnostic solution for customers who prefer not to focus on technical aspects.",
          techStack: [".NET", "React", "NextJs", "Kubernetes", "Microservices"],
          achievements: [
            "Integrated core business logic using .NET",
            "Performed testing features/bugs from backlog items",
            "Built internal tools for QC and developers using React and Vite",
            "Wrote load tests and monitored using Grafana"
          ]
        },
        {
          name: "Licensee Forecast Admin",
          role: "Fullstack Developer",
          period: "Oct 2023 - Aug 2024",
          teamSize: 5,
          description: "High-performance admin website utilizing JavaScript and .NET to deliver optimal results.",
          techStack: [".NET MVC 5", ".NET 6", "React", "Webpack", "HTML/CSS", "jQuery"],
          achievements: [
            "Migrated MVC architecture to 3-layer architecture",
            "Separated the big MVC codebase into micro-site (SOA)",
            "Applied Micro Front-end architecture to the UI",
            "Converted MVC views to a React-based project with lazy-loading for improved performance",
            "Reorganized front-end code by creating an npm package to reduce duplication; used Webpack as a build tool",
            "Transitioned the old .NET Framework to .NET 6 and implemented an API Gateway",
            "Enhanced unit testing and managed CI/CD pipelines with Docker and GitLab CI"
          ]
        },
        {
          name: "Licensee Admin Portal",
          role: "Fullstack Developer",
          period: "Jun 2023 - Oct 2023",
          teamSize: 4,
          description: "Internal client administration tool, originally a cutting-edge web solution built in 2013.",
          techStack: [".NET MVC 5", "React", "AngularJS", "HTML/CSS", "jQuery"],
          achievements: [
            "Enhanced unit testing",
            "Automated licensee creation to reduce manual workflows"
          ]
        }
      ]
    }
  ],

  education: [
    {
      degree: "Software Engineer",
      institution: "University of Information Technology",
      location: "Ho Chi Minh City, Vietnam",
      graduationYear: "2023",
      startYear: "2019"
    }
  ],

  skills: skillCategories.map(category => ({
    category: category.category,
    items: category.skills.map(skill => skill.name)
  })),

  projects: projects.slice(0, 3).map(project => ({
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl
  })),

  certifications: [
    "AWS Certified Developer - Associate (Dec 2024)",
    "AWS Certified Solutions Architect - Associate (Oct 2023)"
  ]
};
