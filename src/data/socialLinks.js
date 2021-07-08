import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiGithub } from "react-icons/si";

export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/mitul-garg-227170190/",
  },
  {
    id: 2,
    icon: <SiCodechef className="social-icon" />,
    url: "https://www.codechef.com/users/mitulgarg",
  },
  {
    id: 3,
    icon: <SiCodeforces className="social-icon" />,
    url: "https://codeforces.com/profile/mitulgarg",
  },
  {
    id: 4,
    icon: <SiGithub className="social-icon" />,
    url: "https://github.com/mitul-garg",
  },
];
