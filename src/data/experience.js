import { v4 as uuidv4 } from "uuid";

// keep the job you want as default to show up at the zeroth index
export const jobs = [
  {
    id: uuidv4(),
    title: "Software Engineer",
    company: "Optum (UHG)",
    dates: "march 2024 - present",
    skills: ["Terraform", "Azure"],
    duties: [
      "  Refactored the code using Terraform modules to reduce code redundancy",
      "  Gained knowledge related to Devops & Cloud Computing",
      // "  Reported bugs and gave feedback and suggestions on previously existing content",
    ],
  },
  {
    id: uuidv4(),
    title: "SDE Intern - Platform",
    company: "Quantiphi Inc",
    dates: "january 2023 - november 2023",
    skills: ["AWS", "GCP", "React JS"],
    duties: [
      "  Developed Full Stack Websites with React & AWS Services",
      "  Deployed them using AWS Amplify, Amazon Cognito, Lambda, Dynamo DB",
      // "  Reported bugs and gave feedback and suggestions on previously existing content",
    ],
  },
  {
    id: uuidv4(),
    title: "Subject Matter Expert (CSE)",
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
    title: "Software Developer & Sponsorship Coordinator",
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
