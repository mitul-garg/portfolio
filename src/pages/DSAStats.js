import React from "react";

import { Doughnut } from "react-chartjs-2";

import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { FaStar } from "react-icons/fa";

const problemsData = {
  labels: ["GFG Practice", /*"Codechef", "Codeforces" ,*/ "Leetcode"],
  datasets: [
    {
      data: [450, /*80, 298,*/ 500],
      backgroundColor: ["#2a9d8f", /*"#cb997e", "#264653",*/ "#e9c46a"],
      hoverBackgroundColor: [
        "#2a9d8fdd",
        // "#cb997edd",
        // "#264653dd",
        "#e9c46add",
      ],
    },
  ],
};

const achievements = [
  // initial spaces in each achievement are a must for styling purpose
  "  Rated 1769 (Top 8.5% Globally) on Leetcode Contests",
  "  Rank 2300/23k+ (Top 10%) in Leetcode Weekly Contest 278",
  "  Global Rank 494/10k+ (Top 5%) in Codechef Starters 16",
  "  Global Rank 721/8k+ (Top 10%) in Code Senso organized by IIIT Allahabad",
  "  3-Star on Codechef (Max Rating : 1756)",
];

export const DSAStats = () => {
  return (
    <div className="dsa">
      <div className="charts-container">
        <h3 className="opensource-title">Problems Solved : 900+</h3>
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
            GFG Practice <SiGeeksforgeeks />
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
        <ul className="job-duties">
          {achievements.map((acm, index) => {
            return (
              <li key={index}>
                <FaStar className="bullet" />
                {acm}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
