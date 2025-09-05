import React from "react";

function Results({ answers, score, onRestart }) {
  return (
    <div className="results">
      <h2>You scored {score}/{answers.length}</h2>
      <ul>
        {answers.map((ans, idx) => (
          <li key={idx} className={ans.isCorrect ? "correct" : "incorrect"}>
            <strong dangerouslySetInnerHTML={{ __html: ans.question }} /> <br />
            Your answer: {ans.selected} <br />
            Correct answer: {ans.correct}
          </li>
        ))}
      </ul>
      <button className="restart-btn" onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default Results;
