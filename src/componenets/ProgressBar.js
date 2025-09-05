import React from "react";

function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <p>{current} / {total}</p>
    </div>
  );
}

export default ProgressBar;
