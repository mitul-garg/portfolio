import {
  DiJava,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiVisualstudio,
  DiGit,
  DiGoogleCloudPlatform,
} from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiPostman,
  SiAmazonaws,
  SiSpringboot,
  SiCplusplus,
  SiHashicorp,
  SiMicrosoftazure,
  SiTerraform,
  SiPostgresql,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

export const category = [
  {
    id: uuidv4(),
    name: "languages",
    skills: [
      {
        id: uuidv4(),
        name: "java",
        icon: <DiJava />,
      },
      {
        id: uuidv4(),
        name: "c++",
        icon: <SiCplusplus />,
      },
      {
        id: uuidv4(),
        name: "sql",
        icon: <AiOutlineConsoleSql />,
      },
      {
        id: uuidv4(),
        name: "hcl",
        icon: <SiHashicorp />,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "web",
    skills: [
      {
        id: uuidv4(),
        name: "react js",
        icon: <DiReact />,
      },
      {
        id: uuidv4(),
        name: "node js",
        icon: <DiNodejsSmall />,
      },
      {
        id: uuidv4(),
        name: "spring boot",
        icon: <SiSpringboot />,
      },
      {
        id: uuidv4(),
        name: "html",
        icon: <DiHtml5 />,
      },
      {
        id: uuidv4(),
        name: "css",
        icon: <DiCss3 />,
      },
      {
        id: uuidv4(),
        name: "javascript",
        icon: <DiJavascript1 />,
      },
      {
        id: uuidv4(),
        name: "next js",
        icon: <RiNextjsFill />,
      },
      {
        id: uuidv4(),
        name: "tailwind css",
        icon: <RiTailwindCssFill />,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "cloud",
    skills: [
      {
        id: uuidv4(),
        name: "azure",
        icon: <SiMicrosoftazure />,
      },
      {
        id: uuidv4(),
        name: "aws",
        icon: <SiAmazonaws />,
      },
      {
        id: uuidv4(),
        name: "gcp",
        icon: <DiGoogleCloudPlatform />,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "tools",
    skills: [
      {
        id: uuidv4(),
        name: "terraform",
        icon: <SiTerraform />,
      },
      {
        id: uuidv4(),
        name: "firebase",
        icon: <IoLogoFirebase />,
      },
      {
        id: uuidv4(),
        name: "vs code",
        icon: <DiVisualstudio />,
      },
      {
        id: uuidv4(),
        name: "git",
        icon: <DiGit />,
      },
      {
        id: uuidv4(),
        name: "postman",
        icon: <SiPostman />,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "database",
    skills: [
      {
        id: uuidv4(),
        name: "mongodb",
        icon: <DiMongodb />,
      },
      {
        id: uuidv4(),
        name: "postgresql",
        icon: <SiPostgresql />,
      },
    ],
  },
];

// export const skills = [
//   {
//     id: uuidv4(),
//     name: "java",
//     icon: <DiJava />,
//   },
//   {
//     id: uuidv4(),
//     name: "react js",
//     icon: <DiReact />,
//   },
//   {
//     id: uuidv4(),
//     name: "aws",
//     icon: <SiAmazonaws />,
//   },
//   {
//     id: uuidv4(),
//     name: "gcp",
//     icon: <DiGoogleCloudPlatform />,
//   },
//   {
//     id: uuidv4(),
//     name: "spring boot",
//     icon: <SiSpringboot />,
//   },
//   {
//     id: uuidv4(),
//     name: "sql",
//     icon: <AiOutlineConsoleSql />,
//   },
//   {
//     id: uuidv4(),
//     name: "machine learning",
//     icon: <GiArtificialIntelligence />,
//   },
//   {
//     id: uuidv4(),
//     name: "node js",
//     icon: <DiNodejsSmall />,
//   },
//   {
//     id: uuidv4(),
//     name: "mongo db",
//     icon: <DiMongodb />,
//   },
//   {
//     id: uuidv4(),
//     name: "html",
//     icon: <DiHtml5 />,
//   },
//   {
//     id: uuidv4(),
//     name: "css",
//     icon: <DiCss3 />,
//   },
//   {
//     id: uuidv4(),
//     name: "javascript",
//     icon: <DiJavascript1 />,
//   },
//   {
//     id: uuidv4(),
//     name: "firebase",
//     icon: <IoLogoFirebase />,
//   },
//   {
//     id: uuidv4(),
//     name: "vs code",
//     icon: <DiVisualstudio />,
//   },
//   {
//     id: uuidv4(),
//     name: "git",
//     icon: <DiGit />,
//   },
//   {
//     id: uuidv4(),
//     name: "postman",
//     icon: <SiPostman />,
//   },
// ];
