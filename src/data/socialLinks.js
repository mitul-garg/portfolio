import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  SiCodeforces,
  SiGithub,
  SiMedium,
  SiStackoverflow,
} from "react-icons/si";

export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/mitul-garg-227170190/",
  },
  {
    id: 2,
    icon: <SiCodeforces className="social-icon" />,
    url: "https://codeforces.com/profile/mitulgarg",
  },
  {
    id: 3,
    icon: <SiGithub className="social-icon" />,
    url: "https://github.com/mitul-garg",
  },
  {
    id: 4,
    icon: <SiMedium className="social-icon" />,
    url: "https://mitulgarg.medium.com/",
  },
  {
    id: 5,
    icon: <SiStackoverflow className="social-icon" />,
    url: "https://stackoverflow.com/users/13457917/mitul-garg",
  },
];
