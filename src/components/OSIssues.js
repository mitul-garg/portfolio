import React from "react";
import { Link } from "react-router-dom";

let issuesJSON = require("../data/opensource/issues.json");
let issues = issuesJSON.data.user.issues.nodes;
let newIssues = issues.slice(0, 10);

export const OSIssues = () => {
  return (
    <div className="issues">
      <h3 className="opensource-title">Issues</h3>
      <div className="opensource-issues">
        {newIssues.map((issue) => {
          let { id, closed, title, createdAt, number, repository } = issue;
          let classnames = "issue ";
          if (closed) classnames += "closed-issue";
          else classnames += "open-issue";
          return (
            <div key={id} className={classnames}>
              <h3>{title}</h3>
              <p>
                #{number} opened on {createdAt.substring(0, 10)}
              </p>
              <p>
                Repository: <a href={repository.url}>{repository.name}</a>
              </p>
              <p>{closed ? "Closed" : "Open"}</p>
            </div>
          );
        })}
      </div>
      <Link to="/issues">
        <button className="hero-btn opensource-btn">ALL Issues</button>
      </Link>
    </div>
  );
};
