import React from "react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";

export const Error = () => {
  return (
    <div className="error">
      <h3>Oops! You have reached a page that does not exist!</h3>
      <Link to="/">
        <button>
          Travel Back Home
          <FcHome className="error-home" />
        </button>
      </Link>
    </div>
  );
};
