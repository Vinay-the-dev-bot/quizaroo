import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "../Components/QuestionCard";
import { useState } from "react";
import { useNavigate } from "react-router";

function Quiz() {
  const questions = useSelector((state) => state.questions);
  const score = useSelector((state) => state.score);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correct, setCorrect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [qstnNumber, setQstnNumber] = useState(0);
  // Function to handle answer selection
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[qstnNumber].correct_answer) {
      setCorrect(true);
      dispatch({ type: "Correct", payload: 1 });
    } else {
      setCorrect(false);
    }
  };
  const viewResults = () => {
    navigate("/results");
  };
  const changeQuestion = () => {
    setCorrect(false);
    setQstnNumber((qstnNumber) => qstnNumber + 1);
  };
  // Function to check the selected answer
  const checkAnswer = () => {
    if (selectedAnswer === questions[qstnNumber].correct_answer) {
      setCorrect(true);
      dispatch({ type: "Correct", payload: 1 });
    } else {
      setCorrect(false);
    }
  };
  return (
    <>
      {JSON.stringify(score)}
      {JSON.stringify(questions[qstnNumber].correct_answer)}

      {/* {questions &&
        questions.map((question) => {
          return <QuestionCard question={qstnNumber} />;
        })} */}
      {
        <div>
          <div>
            <p>{questions[qstnNumber].question}</p>
          </div>
          <div>
            {questions[qstnNumber].incorrect_answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswerSelection(answer)}>
                {answer}
              </button>
            ))}
            <button
              onClick={() =>
                handleAnswerSelection(questions[qstnNumber].correct_answer)
              }
            >
              {questions[qstnNumber].correct_answer}
            </button>
          </div>
          {selectedAnswer && (
            <div>
              <p>{JSON.stringify(correct)}</p>
            </div>
          )}
          {JSON.stringify(qstnNumber)}
          {JSON.stringify(questions.length)}
          {qstnNumber + 1 === questions.length ? (
            <button onClick={viewResults}>Submit</button>
          ) : (
            <button onClick={changeQuestion}>Next</button>
          )}
        </div>
      }
    </>
  );
}

export default Quiz;
