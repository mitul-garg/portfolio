import React from "react";

let prJSON = require("../data/opensource/pullRequests.json");
let prs = prJSON.data.user.pullRequests.nodes;

export const AllPRs = () => {
  return (
    <div className="allprs">
      <div className="pullrequests">
        <h3 className="opensource-title">Pull Requests</h3>
        <div className="opensource-prs">
          {prs.map((pr) => {
            let {
              id,
              title,
              number,
              createdAt,
              baseRepository,
              changedFiles,
              additions,
              deletions,
              state,
            } = pr;
            let classnames = "pr ";
            if (state === "MERGED") classnames += "merged";
            else if (state === "OPEN") classnames += "open";
            else classnames += "closed";
            return (
              <div key={id} className={classnames}>
                <h3 className="pr-title">{title}</h3>
                <p>
                  #{number} opened on {createdAt.substring(0, 10)}
                </p>
                <p>
                  Repository:{" "}
                  <a href={baseRepository.url}>{baseRepository.name}</a>
                </p>
                <p>
                  <span className="additions">{additions}+ </span>
                  <span className="deletions">{deletions}-</span>
                </p>
                <p>{changedFiles} Files Changed</p>
                <p>
                  {state === "MERGED"
                    ? "Merged"
                    : state === "OPEN"
                    ? "Open"
                    : "Closed"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
