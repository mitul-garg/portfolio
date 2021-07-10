import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { ImCross } from "react-icons/im";
import { links } from "../data/links";
import { socialLinks } from "../data/socialLinks";

export const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext();

  if (showSidebar) {
    document.body.style.overflow = "hidden";
    if (document.querySelector(".img-overlay"))
      document.querySelector(".img-overlay").style.display = "none";
  } else {
    document.body.style.overflow = "auto";
    if (document.querySelector(".img-overlay"))
      document.querySelector(".img-overlay").style.display = "block";
  }
  return (
    <div className={`${showSidebar ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <ImCross onClick={closeSidebar} />
      </div>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url} className="sidebar-link" onClick={closeSidebar}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="sidebar-social-links">
        {socialLinks.map((link) => {
          const { id, icon, url } = link;
          return (
            <li key={id}>
              <a href={url} className="social-link">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
