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
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiPostman, SiAmazonaws, SiSpringboot } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export const skills = [
  {
    id: uuidv4(),
    name: "java",
    icon: <DiJava />,
  },
  {
    id: uuidv4(),
    name: "react js",
    icon: <DiReact />,
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
  {
    id: uuidv4(),
    name: "spring boot",
    icon: <SiSpringboot />,
  },
  {
    id: uuidv4(),
    name: "sql",
    icon: <AiOutlineConsoleSql />,
  },
  {
    id: uuidv4(),
    name: "machine learning",
    icon: <GiArtificialIntelligence />,
  },
  {
    id: uuidv4(),
    name: "node js",
    icon: <DiNodejsSmall />,
  },
  {
    id: uuidv4(),
    name: "mongo db",
    icon: <DiMongodb />,
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
];
