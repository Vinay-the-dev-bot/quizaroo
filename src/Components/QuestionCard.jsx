import { useState } from "react";

function QuestionCard({ question }) {
  console.log("alknanks", question);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setanswered] = useState(false);

  // Function to handle answer selection
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  // Function to check the selected answer
  const checkAnswer = () => {
    if (selectedAnswer === question.correct_answer) {
      return "Correct!";
    } else {
      return "Incorrect!";
    }
  };
  return (
    <>
      {/* {JSON.stringify(question)} */}

      <div>
        <div>
          <p>{question.question}</p>
        </div>
        <div>
          {question.incorrect_answers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswerSelection(answer)}>
              {answer}
            </button>
          ))}
          <button
            onClick={() => handleAnswerSelection(question.correct_answer)}
          >
            {question.correct_answer}
          </button>
        </div>
        {selectedAnswer && (
          <div>
            <p>{checkAnswer()}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default QuestionCard;
