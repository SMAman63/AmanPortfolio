# Portfolio Data Sections and Filled Information

This document details where each piece of data is configured and what data is currently filled in the portfolio.

---

## 1. Profile & Basic Info (`src/features/portfolio/data/user.ts`)
This file contains the core profile information of the user.

*   **First Name**: `"Mohammed Aman"`
*   **Last Name**: `"Shaikh"`
*   **Display Name**: `"Aman Shaikh"`
*   **Username**: `"aman"`
*   **Pronouns**: `"he/him"`
*   **Bio**: `"Creating with code. Small details matter."`
*   **Status/Flip Sentences**:
    *   `"Creating with code. Small details matter."`
    *   `"Backend Engineer"`
    *   `"Open Source Contributor"`
*   **Address**: `"Ahmedabad, Gujarat, India"`
*   **Phone Number**: Base64 encoded phone number
*   **Email**: Base64 encoded email (`aman15362177@gmail.com`)
*   **Website**: `https://aman.indighub.com`
*   **Current Jobs**:
    *   Junior Backend Developer at **Webify.ai** (`https://webify.ai`)
    *   Freelance Backend Engineer at **Self-Employed** (`https://aman.indighub.com`)
*   **About (Markdown Text)**:
    *   Backend & DevOps Engineer with 1+ year of hands-on experience building and maintaining production-ready systems.
    *   Started as a Backend Intern at Webify.ai, later promoted to Junior Backend Developer.
    *   Experienced in Python, Django, Django REST Framework, Docker, Linux, and cloud-based deployments.
    *   Since Dec 2025, working as a Freelance Backend Engineer.
*   **Avatar / OG Image URL**: GitHub avatar link (`https://avatars.githubusercontent.com/u/171734598?v=4`)
*   **Audio Name Pronunciation**: `/audio/shaikhaman.mp3`
*   **Time Zone**: `Asia/Kolkata`
*   **Keywords**: SEO search keywords (`aman shaikh`, `backend engineer`, `django`, `devops`, `freelancer backend`, etc.)

---

## 2. Work Experiences & Education (`src/features/portfolio/data/experiences.ts`)
This file contains details about work history and education.

### **Experiences**:
1.  **Webify.ai**
    *   *Backend Developer Intern* (12.2024 - 06.2025)
        *   Django & DRF backend APIs, database design, authentication & role-based access control.
        *   Skills: Python, Django, DRF, PostgreSQL, Node.js, Git, Linux.
    *   *Junior Backend Developer* (06.2025 - 12.2025)
        *   Scalable REST APIs, background jobs, payment gateways, Docker deployments.
        *   Skills: Python, Django, DRF, FastAPI, Node.js, Docker, NGINX, PostgreSQL, AWS, AI/ML, n8n.
2.  **Freelance** (Current Employer)
    *   *Freelance Backend & DevOps Engineer* (12.2025 - Present)
        *   Building backend systems, secure OTP/token authentication, APIs with Django/FastAPI, AI-driven automation using n8n.
        *   Skills: Python, Django, FastAPI, Node.js, n8n, Docker, AWS, Linux, CI/CD, AI/ML.

### **Education**:
*   **Bachelor’s Degree — Computer Science** (08.2022 - 06.2026)
    *   Data structures, algorithms, databases, operating systems, AI/ML, backend design.
    *   Skills: Data Structures, Algorithms, Databases, Operating Systems, Software Engineering, AI/ML.

---

## 3. Projects (`src/features/portfolio/data/projects.ts`)
Contains portfolio projects with descriptions, links, tech stack skills, and logos.

*   **Dar Al Kuwait** (Premium Perfume Brand E-commerce & Admin Dashboard, Next.js / Node / Express / MongoDB, deployed on AWS)
*   **Befach** (B2B E-commerce platform, Django / Next.js, deployed on Hostinger)
*   **Cut It** (Mobile Barber Booking App & Multi-tenant Dashboards, React Native / Node / Express / MongoDB, backend on AWS, Play Store release)

---

## 4. Tech Stack (`src/features/portfolio/data/tech-stack.ts`)
A comprehensive list of technologies, libraries, and frameworks categorized for display:

*   **Languages**: TypeScript, JavaScript, Python, PHP, Java
*   **Runtimes**: Node.js, Bun
*   **Frontend Libraries/UI**: React, Tailwind CSS, shadcn/ui, Radix UI, Base UI, Motion, Ant Design
*   **Frameworks**: Next.js, LoopBack, Laravel
*   **State Management / Navigation**: MobX-State-Tree, Redux, React Router, React Navigation
*   **Database & Version Control**: Git, Docker, MySQL, MongoDB, Redis
*   **Design & Tools**: Figma, Adobe Photoshop, ChatGPT

---

## 5. Certifications (`src/features/portfolio/data/certifications.ts`)
List of educational credentials and licenses:

*   **Google for Education**: Gemini Certified Educator (2025)
*   **animations.dev**: Animations on the Web (2025)
*   **Intellectual Property Office of Viet Nam**: Trademark Registrations (2025)
*   **Vercel**: Next.js SEO, Next.js App Router, React Foundations (2025)
*   **Copyright Office of Viet Nam**: Copyright Registrations (2025, 2024)
*   **USSH-VNUHCM**: CEFR B1 English Proficiency (2024)
*   **Coursera (Meta, IBM, NUS)**: Persuasive Communication, Intro to Databases, Creative & Critical Thinking (2022)
*   **Accenture / Google Digital Garage**: Digital Skills, Fundamentals of Digital Marketing (2022)
*   **Microsoft**: MOS PowerPoint 2013, MOS Word 2013 (2017, 2016)
*   **Google**: Google Code-in (2016)
*   **HUS High School for Gifted Students**: HSGS Olympiad (2016)

---

## 6. Awards & Competitions (`src/features/portfolio/data/awards.ts`)
Listing of prizes and academic achievements from 2014 to 2025:

*   **1st Prize & Consolation Prizes**: Can Tho City & National Young Informatics Contests (2014, 2015, 2016, 2017, 2018)
*   **2nd/3rd Prizes**: Science and Engineering Fairs, Youth Creativity Contests, and Outstanding Student Exams (2015 - 2018)
*   **Special Awards**: Binh Duong Hackathon Creative Award (2017), Business Startup Competition (2019), Design/Manufacturing Award (2022)
*   **OSS Cohort**: ▲Vercel OSS Program (Summer 2025 Cohort)

---

## 7. Social Links (`src/features/portfolio/data/social-links.ts`)
Filled active accounts:

*   **X (Twitter)**: `@AmanShaikh33134`
*   **GitHub**: `SMAman63`
*   **LinkedIn**: `Aman Shaikh`

---

## 8. Bookmarks (`src/features/portfolio/data/bookmarks.ts`)
Curated list of interesting design, engineering, and product articles.

*   Vercel, Emil Kowalski, Guillermo Rauch, and Resend blog posts and guidelines on UI/UX, Taste, and Philosophy.
