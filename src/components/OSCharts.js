import React from "react";
import { Doughnut } from "react-chartjs-2";

let issuesJSON = require("../data/opensource/issues.json");
let issuesLength = issuesJSON.data.user.issues.totalCount;
let issues = issuesJSON.data.user.issues.nodes;
let closed = 0,
  open = 0;
for (let i = 0; i < issuesLength; i++) {
  if (issues[i].closed) closed++;
  else open++;
}

let prJSON = require("../data/opensource/pullRequests.json");
let prLength = prJSON.data.user.pullRequests.totalCount;
let prs = prJSON.data.user.pullRequests.nodes;
let mergedPR = 0,
  openPR = 0,
  closedPR = 0;
for (let i = 0; i < prLength; i++) {
  if (prs[i].state === "MERGED") mergedPR++;
  else if (prs[i].state === "CLOSED") closedPR++;
  else openPR++;
}

const issueData = {
  labels: ["Open", "Closed"],
  datasets: [
    {
      data: [open, closed],
      backgroundColor: ["#28a745", "#d73a49"],
      hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
    },
  ],
};

const prData = {
  labels: ["Open", "Merged", "Closed"],
  datasets: [
    {
      data: [openPR, mergedPR, closedPR],
      backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
      hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
    },
  ],
};

export const OSCharts = () => {
  return (
    <div className="charts-container">
      <h3 className="opensource-title">Contributions</h3>
      <div className="opensource-charts">
        <div className="chart">
          <h3>Issue Distribution</h3>
          <Doughnut data={issueData} className="doughnut" />
        </div>
        <div className="chart">
          <h3>Pull Request Distribution</h3>
          <Doughnut data={prData} className="doughnut" />
        </div>
      </div>
    </div>
  );
};
