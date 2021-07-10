import React from "react";

let issuesJSON = require("../data/opensource/issues.json");
let issues = issuesJSON.data.user.issues.nodes;

export const AllIssues = () => {
  return (
    <div className="allissues">
      <div className="issues">
        <h3 className="opensource-title">Issues</h3>
        <div className="opensource-issues">
          {issues.map((issue) => {
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
      </div>
    </div>
  );
};
