import React from "react";
import { socialLinks } from "../data/socialLinks";
import { ImHeart } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-social-links">
        {socialLinks.map((link) => {
          const { id, icon, url } = link;
          return (
            <li key={id}>
              <a href={url} className="footer-social-link">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
      <h4>
        Made with <ImHeart className="heart" /> in React
      </h4>
    </footer>
  );
};
