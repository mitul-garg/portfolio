import { v4 as uuidv4 } from "uuid";

// keep the job you want as default to show up at the zeroth index
export const jobs = [
  {
    id: uuidv4(),
    title: "Senior Software Developer",
    company: "Stealth Startup",
    dates: "august 2026 - present",
    skills: ["Spring MVC", "GCP"],
    duties: [
      "  Early-stage API marketplace startup — as the first engineering hire, partnering directly with the founder to build out the engineering team and establish the platform’s technical foundation.",
    ],
  },
  {
    id: uuidv4(),
    title: "Senior Software Engineer",
    company: "Optum (UHG)",
    dates: "march 2024 - august 2026",
    skills: [".Net", "Terraform", "Multi-cloud", "Kubernetes"],
    duties: [
      "  Contributed to Optum’s Voice Analytics Platform (VAP) – a PaaS enabling transcription, summarization, and cross-business-unit integration using Gen AI.",
      "  Owned multiple features end-to-end — from design through performance testing and optimization — consistently ensuring on-time delivery.",
      "  Optimized API performance by warming up connections with dummy requests and tuning health controller probes, delivering a 90%+ improvement in response times across endpoints.",
      "  Engineered an API supporting both synchronous and asynchronous requests within a microservices architecture, sustaining consistent performance under load.",
      "  Identified performance bottlenecks during database writes in an event-driven architecture, driving adoption of pooled database connections to improve throughput.",
      "  Led team operations in the tech lead’s absence — running sprint planning, standups, retrospectives, and stakeholder alignment across Agile ceremonies.",
      "  Onboarded partner teams onto APIs built in-house, owning end-to-end functional, regression, and load testing across every integration.",
      "  Built a scalable .NET Web API on Clean Architecture to unify AudioCodes, Google Pub/Sub, and Amazon Connect Contact Lens events, enabling cross-provider integrations.",
      "  Authored system design documentation to extend database and ingestion architectures for new APIs from the ground up.",
      "  Configured Azure Kubernetes Service (AKS) across multiple APIs to support over 40,000 requests per minute (RPM).",
      "  Reduced Redis cache evictions by 80% by optimizing high-turnover keys and TTL configurations.",
      "  Implemented multi-auth support with Google JWT validation, Azure AD, and Enterprise Cloud, plus a reusable Azure AD Graph API wrapper for identity resolution via employee ID or email.",
      "  Implemented Role-Based Access Control (RBAC) across three layers — UI, API, and Infrastructure — enforcing security and global feature toggles for user groups.",
      "  Resolved race conditions and concurrency issues to guarantee reliable, idempotent request handling across high-load services.",
      "  Unified multiple Terraform IaC modules to cut deployment redundancy and built efficient blob migration with Delta extraction, reducing transfer time for millions of objects.",
      "  Completed a Gen AI certification covering RAG and Agent architectures; a power AI user with 800+ premium Copilot requests.",
    ],
  },
  {
    id: uuidv4(),
    title: "SDE Intern - Platform",
    company: "Quantiphi Inc",
    dates: "january 2023 - november 2023",
    skills: ["AWS", "React JS"],
    duties: [
      "  Developed and deployed full-stack web applications using React and AWS services, enabling scalable and serverless delivery.",
      "  Implemented end-to-end cloud architecture with AWS Amplify, integrating Cognito for authentication, Lambda for backend logic, and DynamoDB for persistent storage.",
      // "  Reported bugs and gave feedback and suggestions on previously existing content",
    ],
  },
  {
    id: uuidv4(),
    title: "Subject Matter Expert",
    company: "wikasta",
    dates: "may 2022 - june 2022",
    skills: ["DSA", "Core CS", "Machine Learning"],
    duties: [
      // "  Created Software Development and Programming related content",
      "  Contributed more than 200 Questions on Data Structures, Algorithms, Machine Learning, HTML, CSS",
      "  Reported bugs and gave feedback and suggestions on previously existing content",
    ],
  },
  {
    id: uuidv4(),
    title: "Software Developer",
    company: "kalaamanch",
    dates: "march 2020 - september 2020",
    skills: ["HTML", "CSS", "Javascript"],
    duties: [
      "  Created two versions of the website for the College Club from scratch in HTML, CSS and JS",
      "  Websites are made mobile-friendly in order to enhance the target audience’s experience",
      // "  Dealt with multiple sponsors and ensured smooth conduct of all the Competitions",
    ],
  },
];
