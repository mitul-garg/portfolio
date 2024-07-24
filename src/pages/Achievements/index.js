import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { FaExternalLinkAlt, FaStar } from "react-icons/fa";

import "./styles.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const problemsData = {
  labels: ["GFG Practice", /*"Codechef", "Codeforces" ,*/ "Leetcode"],
  datasets: [
    {
      data: [450, /*80, 298,*/ 700],
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
  "Solved 1100+ problems across platforms",
  "Passed GCP Associate Cloud Engineer Certification",
  "Rated 1769 (Top 8.5% Globally) on Leetcode Contests",
  "Ranked in Top 667 out of 48726 Participants in Lowe’s House of Code",
  "Rank 2300/23k+ (Top 10%) in Leetcode Weekly Contest 278",
  "Global Rank 721/8k+ (Top 10%) in Code Senso organized by IIIT Allahabad",
];

export const Achievements = () => {
  return (
    <div className="dsa">
      <div className="dsa-chart">
        <Doughnut data={problemsData} className="dsa-doughnut" />
      </div>
      <div className="dsastats-details">
        <div className="dsa-btn-container">
          <a
            href="https://leetcode.com/mitulgarg/"
            target="_blank"
            rel="noreferrer"
            className="dsa-button"
          >
            Leetcode Profile
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/mitulgarg/practice/"
            target="_blank"
            rel="noreferrer"
            className="dsa-button"
          >
            GFG Profile
          </a>
        </div>
        <div className="achievements">
          {achievements.map((acm, index) => {
            return (
              <div key={index} className="achievement">
                <FaStar className="dsa-bullet" />
                <div>
                  <span>
                    <FaStar className="dsa-bullet-mobile" /> {acm}
                    {acm.includes("GCP") && (
                      <a
                        href="https://google.accredible.com/af693e01-805e-4c42-89d1-d05663f3164e?key=20bc7121c3392d6773c38ece2e3019f86212c3e06cdffaa8245eca11bdd4fca8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <FaExternalLinkAlt className="gcp-link" />
                      </a>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
