import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  // SiCodeforces,
  SiGithub,
  SiLeetcode,
  // SiCodechef,
  SiMedium,
  SiGeeksforgeeks,
} from "react-icons/si";

export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/mitul-garg-227170190/",
  },
  {
    id: 2,
    icon: <SiGeeksforgeeks className="social-icon" />,
    url: "https://auth.geeksforgeeks.org/user/mitulgarg/practice/",
  },
  {
    id: 3,
    icon: <SiGithub className="social-icon" />,
    url: "https://github.com/mitul-garg",
  },
  {
    id: 4,
    icon: <SiLeetcode className="social-icon" />,
    url: "https://leetcode.com/mitulgarg/",
  },
  {
    id: 5,
    icon: <SiMedium className="social-icon" />,
    url: "https://mitulgarg.medium.com/",
  },
];
