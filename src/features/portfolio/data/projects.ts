import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "daralkuwait",
    title: "Dar Al Kuwait",
    period: {
      start: "10.2025",
    },
    link: "https://www.daralkuwait.shop/",
    skills: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "Tailwind CSS",
      "Redux",
      "E-commerce",
    ],
    description: `Premium e-commerce platform for Dar Al Kuwait, an elite perfume brand.
- Developed a high-performance shopping interface using Next.js for server-side rendering and SEO optimization.
- Built a robust administration dashboard for managing inventory, tracking orders, catalog updates, and sales statistics.
- Implemented backend services using Node.js, Express, and MongoDB, fully deployed on AWS.
`,
    isExpanded: true,
  },
  {
    id: "befach",
    title: "Befach",
    period: {
      start: "05.2025",
      end: "09.2025",
    },
    link: "https://www.befach.com",
    skills: [
      "Next.js",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Hostinger",
      "B2B E-commerce",
    ],
    description: `A robust B2B e-commerce platform facilitating business-to-business bulk ordering and catalog browsing.
- Engineered a highly responsive, user-friendly frontend using Next.js, optimized for seamless user flow and fast load times.
- Designed and integrated secure, scalable backend APIs using Django and Django REST Framework.
- Deployed the complete solution on Hostinger with optimized caching and PostgreSQL database configuration.
`,
  },
  {
    id: "cut-it",
    title: "Cut It",
    period: {
      start: "12.2025",
    },
    link: "https://play.google.com",
    skills: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "Mobile App",
      "Multi-tenant Dashboard",
    ],
    description: `A mobile-first barber booking application connecting clients with barbershops and freelance barbers.
- Developed cross-platform mobile apps for customers and barbers using React Native.
- Designed multi-tenant dashboards tailored for system administrators, barbers, and shop owners to manage appointments, staff schedules, and revenue reports.
- Scaled and deployed the Node.js/Express backend on AWS, and successfully published the application on the Google Play Store.
`,
  },
]
