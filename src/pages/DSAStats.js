import React from "react";

import { Doughnut } from "react-chartjs-2";

import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

const problemsData = {
  labels: ["GFG Practice", "Codechef", /*"Codeforces" ,*/ "Leetcode"],
  datasets: [
    {
      data: [397, 72, /*298,*/ 139],
      backgroundColor: ["#2a9d8f", "#cb997e", /*"#264653",*/ "#e9c46a"],
      hoverBackgroundColor: [
        "#2a9d8fdd",
        "#cb997edd",
        // "#264653dd",
        "#e9c46add",
      ],
    },
  ],
};

export const DSAStats = () => {
  return (
    <div className="dsa">
      <div className="charts-container">
        <h3 className="opensource-title">Problems Solved : 600+</h3>
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
            GFG Profile <SiGeeksforgeeks />
          </a>
        </button>
        <button className="dsa-button skill">
          <a href="https://leetcode.com/mitulgarg/">
            Leetcode <SiLeetcode />{" "}
          </a>
        </button>
        <button className="dsa-button skill">
          <a href="https://www.codechef.com/users/mitulgarg">
            Codechef <SiCodechef />
          </a>
        </button>
        {/* <button className="dsa-button skill">
          <a href="https://codeforces.com/profile/mitul-garg">Codeforces</a>
        </button> */}
      </div>
    </div>
  );
};
