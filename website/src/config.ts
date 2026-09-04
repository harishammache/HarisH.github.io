export const siteConfig = {
  name: "Jérémy Carpentier",
  title: "Full Stack Engineer",
  description: "Portfolio of Jérémy Carpentier, Full Stack Developer — Apprentice Software Engineer @Evian (SAEME), Danone",
  accentColor: "#1d4ed8",
  social: {
    email: "carpentier.jeremy74@gmail.com",
    linkedin: "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-carpentier-762006207/",
    twitter: "https://x.com/CappieOR",
    github: "https://github.com/CappieGold",
  },
  aboutMe:
    "Full Stack Developer and apprentice software engineer at Evian (SAEME), Danone Group, based near Geneva, France. I build business-critical web applications with a strong focus on software architecture, code quality and user experience, working daily with React, TypeScript, C# and Docker. I own projects end to end — from architecture and implementation to CI/CD and deployment — following DDD, CQRS, Clean Architecture and SOLID principles.",
  skills: [
    "TypeScript",
    "JavaScript",
    "C#",
    "React",
    "AdonisJS",
    "Node.js",
    ".NET 9",
    "Blazor",
    "PostgreSQL",
    "EF Core 9",
    "Docker",
    "Nginx",
    "Keycloak (OIDC)",
    "Active Directory",
    "Windows Server",
    "Oracle VM VirtualBox",
    "VMware",
    "Git",
  ],
  projects: [
    {
      name: "EasyGate — Visitor Access Management Platform",
      description:
        "Production app used daily at the Evian site (Danone), handling 100+ requests and 300+ visitors every month. Built almost entirely solo with a modular DDD & CQRS architecture (13 business modules). Backend on AdonisJS 6 / PostgreSQL / Kysely with trigger-based audit trail and fuzzy duplicate detection (pg_trgm). Frontend in React 19 + Inertia.js with SSR, real-time updates (SSE), dark mode and FR/EN i18n. SSO via Keycloak (OIDC, PKCE), RBAC/ABAC permissions, GDPR compliance, ~900 automated tests, CI, Docker + Nginx deployment. Enterprise project — source hosted on a private internal repository.",
      link: "",
      skills: ["TypeScript", "React", "Inertia.js", "AdonisJS", "PostgreSQL", "Docker", "Keycloak"],
    },
    {
      name: "ADHUB — Active Directory Administration Portal",
      description:
        ".NET 9 / Blazor Server app centralizing Active Directory administration without direct server access. Clean Architecture (Domain, Application, Infrastructure, WebUI) with dependency injection and Result pattern. AD users & groups management (LDAP), account request/approval workflow with notifications, secure single-use expiring password-reset tokens, transactional SMTP emails and full audit trail. Entity Framework Core 9 + SQLite with versioned migrations and role-based authorization middleware. Enterprise project — source hosted on a private internal repository.",
      link: "",
      skills: ["C#", ".NET 9", "Blazor Server", "EF Core 9", "Active Directory"],
    },
  ],
  experience: [
    {
      company: "SAEME - Evian Natural Mineral Waters (Danone Group)",
      title: "Apprentice Full-Stack Developer",
      dateRange: "Oct 2024 - Nov 2026",
      bullets: [
        "Designed and delivered EasyGate and ADHUB end to end, from requirements gathering to architecture, implementation and deployment",
        "Applied DDD, CQRS and Clean Architecture principles across both projects for maintainable, testable codebases",
        "Automated configuration management with Ansible playbooks and containerized deployments with Docker + Nginx",
      ],
    },
  ],
  education: [
    {
      school: "Holberton School",
      degree: "Bachelor's degree in Software Engineering",
      dateRange: "Oct 2023 - Nov 2026",
      achievements: [],
    },
    {
      school: "Lycée Anna de Noailles",
      degree: "Scientific Baccalaureate",
      dateRange: "2012",
      achievements: [],
    },
  ],
};
