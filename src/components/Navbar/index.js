import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { links } from "../../data/links";
import { BiBarChart } from "react-icons/bi";
import "./styles.css";

// dark mode
import { BiMoon, BiSun } from "react-icons/bi";
const parent = document.body;

let darkMode = false;
if (localStorage.getItem("theme") === "dark") {
  darkMode = true;
}

if (darkMode) {
  parent.classList.add("dark");
}
// dark mode

export const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const [isDarkMode, setIsDarkMode] = useState(darkMode);
  const currentRoute = useLocation().pathname;

  const darkModeHandler = () => {
    parent.classList.toggle("dark");
    if (parent.classList.contains("dark"))
      localStorage.setItem("theme", "dark");
    else localStorage.removeItem("theme");
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <div>
          <span onClick={darkModeHandler}>
            {isDarkMode && <BiSun className="theme-icon" />}
            {!isDarkMode && <BiMoon className="theme-icon" />}
          </span>
        </div>
        <div>
          <Link to="/" className="nav-logo">
            MG
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link
                  to={url}
                  className={
                    url === currentRoute
                      ? "nav-link active-nav-link"
                      : "nav-link"
                  }
                >
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
