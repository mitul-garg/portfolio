import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { links } from "../data/links";
import { BiBarChart } from "react-icons/bi";

export const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <div className="navbar">
      <div className="nav-left">
        <span>M</span>G
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} className="nav-link">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-right">
        <BiBarChart className="sidebar-toggle" onClick={openSidebar} />
      </div>
    </div>
  );
};
