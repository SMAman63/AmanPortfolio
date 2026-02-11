import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "webify",
    companyName: "Webify.ai",
    companyLogo:
      "https://www.webify.ai/_next/image/?url=%2Fimages%2FWebify_Logo.webp&w=640&q=75",
    companyWebsite: "https://webify.ai",
    positions: [
      {
        id: "webify-intern",
        title: "Backend Developer Intern",
        employmentPeriod: {
          start: "12.2024",
          end: "06.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Worked on backend APIs using Django and Django REST Framework.
- Assisted in database schema design and API optimization.
- Implemented authentication, role-based access control, and validations.
- Supported automation workflows and backend integrations.`,
        skills: [
          "Python",
          "Django",
          "Django REST Framework",
          "PostgreSQL",
          "Node.js",
          "Git",
          "Linux",
        ],
      },
      {
        id: "webify-jr-backend",
        title: "Junior Backend Developer",
        employmentPeriod: {
          start: "06.2025",
          end: "12.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Promoted based on performance and ownership of backend modules.
- Built scalable REST APIs and background jobs.
- Integrated third-party services, automations, and payment gateways.
- Worked on AI-powered features and managed Docker-based deployments.`,
        skills: [
          "Python",
          "Django",
          "DRF",
          "FastAPI",
          "Node.js",
          "Docker",
          "NGINX",
          "PostgreSQL",
          "AWS",
          "AI/ML",
          "n8n",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    isCurrentEmployer: true,
    positions: [
      {
        id: "freelance-backend",
        title: "Freelance Backend & DevOps Engineer",
        employmentPeriod: {
          start: "12.2025",
        },
        employmentType: "Freelance",
        icon: "code",
        description: `- Building backend systems and automation workflows for startups.
- Developed secure authentication systems using OTP and token-based auth.
- Designed APIs using Django and FastAPI.
- Built AI-driven automations using n8n and cloud services.`,
        skills: [
          "Python",
          "Django",
          "FastAPI",
          "Node.js",
          "n8n",
          "Docker",
          "AWS",
          "Linux",
          "CI/CD",
          "AI/ML",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "degree",
        title: "Bachelor’s Degree — Computer Science",
        employmentPeriod: {
          start: "08.2022",
          end: "06.2026",
        },
        icon: "education",
        description: `- Strong foundation in computer science and software engineering.
- Studied data structures, algorithms, databases, and operating systems.
- Learned fundamentals of AI/ML and backend system design.`,
        skills: [
          "Data Structures",
          "Algorithms",
          "Databases",
          "Operating Systems",
          "Software Engineering",
          "AI/ML",
        ],
      },
    ],
  },
]
