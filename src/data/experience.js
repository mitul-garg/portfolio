import { v4 as uuidv4 } from "uuid";

// keep the job you want as default to show up at the zeroth index
export const jobs = [
  {
    id: uuidv4(),
    title: "Software Engineer",
    company: "Optum (UHG)",
    dates: "march 2024 - present",
    skills: [".Net", "Terraform", "Multi-cloud"],
    duties: [
      "  Contributing to Optum’s Voice Analytics Platform (VAP) – a PaaS enabling transcription, summarization, and integration across business units using Gen AI.",
      "  Developed a scalable .NET Web API using Clean Architecture to unify Google Pub/Sub and Amazon Connect Contact Lens events, enabling cross-provider integrations.",
      "  Resolved race conditions and concurrency issues to ensure reliable and idempotent request handling across high-load services.",
      "  Built a reusable Azure AD Graph API wrapper for user lookup via employee ID or email, streamlining identity resolution.",
      "  Implemented multi-auth support with Google JWT validation and Azure AD, improving authentication flexibility and security.",
      "  Authored system design documentation to extend database and ingestion architectures for new call sources.",
      "  Created custom model binders and middleware for latency tracking, header injection, and dynamic media-type handling.",
      "  Configured Azure Kubernetes Service (AKS) with startup warm-ups to support over 10,000 concurrent requests.",
      "  Reduced Redis cache evictions by 80% by optimizing high-turnover keys and TTL configurations.",
      "  Enhanced APIs to support multi-leg call summarization, improving accuracy for transfer and multi-agent calls.",
      "  Unified multiple Terraform IaC modules, reducing deployment redundancy.",
      "  Implemented efficient blob migration with Delta extraction, cutting transfer time for millions of objects.",
      "  Improved exception handling and code coverage, strengthening maintainability and debugging.",
      "  Integrated a vulnerability detection tool with lower false-positive rates, improving security reliability.",
      "  Completed a Gen AI course covering RAG and Agent architectures.",
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
