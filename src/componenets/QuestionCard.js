import React from "react";

function QuestionCard({ question, onAnswer }) {
  return (
    <div className="card">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      <div className="options">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className="option-btn"
            onClick={() => onAnswer(option)}
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
