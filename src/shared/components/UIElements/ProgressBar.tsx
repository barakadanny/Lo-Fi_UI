import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressBarProps {
  score: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ score }) => {
  const calcColor = (percentage: number, start: number, end: number) => {
    let a = percentage / 100;
    let b = (end - start) * a;
    let c = b + start;

    return `hsl(${c}, 100%, 50%)`;
  };

  return (
    <CircularProgressbar
      value={score}
      text={`${score}%`}
      styles={buildStyles({
        trailColor: "#E2E8F0",
        pathColor: calcColor(score, 0, 120),
        textColor: "#393939",
        textSize: "16px",
      })}
      strokeWidth={10}
    />
  );
};

export default ProgressBar;
