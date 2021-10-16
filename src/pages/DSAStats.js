import React from "react";

import { Doughnut } from "react-chartjs-2";

const problemsData = {
  labels: ["GFG Practice", "Codechef", "Codeforces", "Leetcode"],
  datasets: [
    {
      data: [396, 60, 298, 88],
      backgroundColor: ["#2a9d8f", "#cb997e", "#264653", "#e9c46a"],
      hoverBackgroundColor: [
        "#2a9d8fdd",
        "#cb997edd",
        "#264653dd",
        "#e9c46add",
      ],
    },
  ],
};

export const DSAStats = () => {
  return (
    <div className="dsa">
      <div className="charts-container">
        <h3 className="opensource-title">Problems Solved : 800+</h3>
        <div className="opensource-charts">
          <div className="chart">
            <h3>Distribution</h3>
            <Doughnut data={problemsData} className="doughnut" />
          </div>
        </div>
      </div>
      <div className="dsastats-details skills">
        <button className="dsa-button skill">
          <a href="https://auth.geeksforgeeks.org/user/mitulgarg/practice/">
            GFG Profile
          </a>
        </button>
        <button className="dsa-button skill">
          <a href="https://auth.geeksforgeeks.org/user/mitulgarg/practice/">
            Leetcode
          </a>
        </button>
        <button className="dsa-button skill">
          <a href="https://auth.geeksforgeeks.org/user/mitulgarg/practice/">
            Codechef
          </a>
        </button>
        <button className="dsa-button skill">
          <a href="https://auth.geeksforgeeks.org/user/mitulgarg/practice/">
            Codeforces
          </a>
        </button>
      </div>
    </div>
  );
};
