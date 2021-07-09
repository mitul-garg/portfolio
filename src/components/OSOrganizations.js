import React from "react";

let issuesJSON = require("../data/opensource/organizations.json");
let orgs = issuesJSON.data.user.repositoriesContributedTo.nodes;

export const OSOrganizations = () => {
  return (
    <div className="opensource-organizations">
      <h3 className="opensource-title">Organizations</h3>
      <div className="orgs-grid">
        {orgs.map((org, index) => {
          const { avatarUrl, login } = org.owner;
          return (
            <div key={index} className="org">
              <img src={avatarUrl} alt={login} className="org-logo" />
              <span className="org-title">{login}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
