import React from "react";
import { OSOrganizations } from "../components/OSOrganizations";
import { OSCharts } from "../components/OSCharts";
import { OSPullRequests } from "../components/OSPullRequests";
import { OSIssues } from "../components/OSIssues";

export const OpenSource = () => {
  return (
    <div className="opensource">
      <OSOrganizations />
      <OSCharts />
      <OSPullRequests />
      <OSIssues />
    </div>
  );
};
