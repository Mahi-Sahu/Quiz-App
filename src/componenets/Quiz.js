import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import questionsData from "../data/questions.json";

function Quiz({ onFinish }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Option A: Fetch from API
    // fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    //   .then(res => res.json())
    //   .then(data => normalizeAPI(data.results));

    // Option B: Local JSON
    setQuestions(questionsData);
  }, []);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedOption === currentQuestion.correct_answer;

    if (isCorrect) setScore(score + 1);

    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestion.question,
        selected: selectedOption,
        correct: currentQuestion.correct_answer,
        isCorrect,
      },
    ]);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish([...userAnswers, {
        question: currentQuestion.question,
        selected: selectedOption,
        correct: currentQuestion.correct_answer,
        isCorrect,
      }], isCorrect ? score + 1 : score);
    }
  };

  if (questions.length === 0) return <p>Loading questions...</p>;

  return (
    <div>
      <ProgressBar current={currentIndex + 1} total={questions.length} />
      <QuestionCard
        question={questions[currentIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default Quiz;
