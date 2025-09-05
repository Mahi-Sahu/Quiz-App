import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleFinish = (userAnswers, totalScore) => {
    setAnswers(userAnswers);
    setScore(totalScore);
    setQuizCompleted(true);
  };

  const restartQuiz = () => {
    setQuizCompleted(false);
    setAnswers([]);
    setScore(0);
  };

  return (
    <div className="app">
      <h1 className="title">Quiz App</h1>
      {!quizCompleted ? (
        <Quiz onFinish={handleFinish} />
      ) : (
        <Results answers={answers} score={score} onRestart={restartQuiz} />
      )}
    </div>
  );
}

export default App;
