import type { User } from "@/features/portfolio/types/user"

export const USER = {
  firstName: "Mohammed Aman",
  lastName: "Shaikh",
  displayName: "Aman Shaikh",
  username: "aman",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Backend Engineer",
    "Open Source Contributor",
  ],
  address: "Ahmedabad, Gujarat, India",
  phoneNumber: "KzkxIDk1ODI1OTM5MjM=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YW1hbjE1MzYyMTc3QGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://aman.indighub.com",
  jobTitle: "Backend Engineer",
  jobs: [
    {
      title: "Junior Backend Developer",
      company: "Webify.ai",
      website: "https://webify.ai",
    },
    {
      title: "Freelance Backend Engineer",
      company: "Self-Employed",
      website: "https://aman.indighub.com",
    },
  ],
  about: `
- **Backend & DevOps Engineer** with 1+ year of hands-on experience building and maintaining production-ready systems.
- Started as a **Backend Intern** at **Webift.ai**, later promoted to **Junior Backend Developer** based on performance.
- Experienced in **Python**, **Django**, **Django REST Framework**, **Docker**, **Linux**, and cloud-based deployments.
- Worked on API development, authentication systems, background jobs, and deployment pipelines.
- Since Dec 2025, working as a **Freelance Backend Engineer**, delivering scalable backend solutions for real-world use cases.
`,
  avatar: "https://avatars.githubusercontent.com/u/171734598?v=4",
  ogImage: "https://avatars.githubusercontent.com/u/171734598?v=4",
  namePronunciationUrl: "/audio/shaikhaman.mp3",
  affiliateBadge: {
    name: "Shadcraft",
    url: "https://shadcraft.com",
    logo: "https://assets.chanhdai.com/images/companies/shadcraft.svg?v=2",
  },
  timeZone: "Asia/Kolkata",
  keywords: [
    "aman shaikh",
    "shaikh aman",
    "shaikh mohammed aman",
    "backend engineer",
    "devops",
    "devops engineer",
    "devops freelancer",
    "django",
    "drf",
    "docker",
    "indighub",
    "indighub founder",
    "freelancer backend",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
} satisfies User
