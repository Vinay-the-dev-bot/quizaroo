import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Center, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { url } from "../Strore/actions";

function Quiz() {
  const questions = useSelector((state) => state.questions);
  const score = useSelector((state) => state.score);
  const name = useSelector((state) => state.name);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffled, setShuffled] = useState([]);
  const [correct, setCorrect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [qstnNumber, setQstnNumber] = useState(0);
  const toast = useToast();
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[qstnNumber].correct_answer) {
      setCorrect(true);
      console.log("TOAST");
      toast({
        title: "Correct Answer.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      dispatch({ type: "Correct", payload: 1 });
    } else {
      toast({
        title: "Wrong Answer.",
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
      setCorrect(false);
    }
  };
  useEffect(() => {
    setSelectedAnswer("");
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };
    const allAnswers = [
      ...questions[qstnNumber].incorrect_answers,
      questions[qstnNumber].correct_answer,
    ];

    const shuffledAnswers = shuffleArray(allAnswers);
    console.log("sjkdsdbfs", shuffledAnswers);
    setShuffled(shuffledAnswers);
  }, [qstnNumber]);
  const viewResults = async () => {
    const response = await axios.post(
      `${url}results`,
      {
        name: name,
        score: score,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    navigate("/result");
  };
  const changeQuestion = () => {
    setCorrect(false);
    setQstnNumber((qstnNumber) => qstnNumber + 1);
  };
  return (
    <>
      <Box
        width={"80%"}
        border={"1px "}
        margin={"auto"}
        display={"flex"}
        gap={"50px"}
        borderRadius={"20px"}
        bg={correct ? "#00C464" : "#089BCC"}
        flexDirection={"column"}
        padding={"50px"}
      >
        <Box textAlign={"center"} fontSize={"30px"}>
          <p>{questions[qstnNumber].question}</p>
        </Box>

        <Box
          width={"80%"}
          margin={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"20px"}
        >
          {shuffled.map((opt, index) => {
            return (
              <Box
                fontSize={"20px"}
                border={"1px solid #f0f0f0"}
                bg={"#f0f0f0"}
                borderRadius={"5px"}
                width={"80%"}
                height={"40px"}
                margin={"auto"}
                padding={"0 10px"}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                _hover={"pointer"}
                key={index}
                onClick={() => handleAnswerSelection(opt)}
              >
                {index + 1}.{opt}
              </Box>
            );
          })}
        </Box>

        {/* {selectedAnswer && (
          <div>
            <p>{JSON.stringify(correct)}</p>
          </div>
        )} */}
        <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
          <Text
            fontSize={"20px"}
            border={"1px solid #f0f0f0"}
            bg={"#f0f0f0"}
            borderRadius={"5px"}
            height={"40px"}
            margin={"auto"}
            padding={"0 10px"}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            {qstnNumber + 1} of {questions.length}
          </Text>
          {qstnNumber + 1 === questions.length ? (
            <Box
              bg={"#F0F0F0"}
              borderRadius={"5px"}
              width={"20%"}
              height={"40px"}
              colorScheme="blue"
              margin={"auto"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              _hover={"pointer"}
              textAlign={"center"}
              onClick={viewResults}
            >
              Submit
            </Box>
          ) : (
            <Box
              bg={"#F0F0F0"}
              borderRadius={"5px"}
              width={"20%"}
              height={"40px"}
              colorScheme="blue"
              margin={"auto"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              _hover={"pointer"}
              textAlign={"center"}
              onClick={changeQuestion}
            >
              Next
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Quiz;

// <>
//   {/* {questions &&
//     questions.map((question) => {
//       return <QuestionCard question={qstnNumber} />;
//     })} */}
//   {
//     <Box>
//       <div>
//         <p>{questions[qstnNumber].question}</p>
//       </div>
//       {/* {JSON.stringify(shuffled)} */}
//       {/* <div>
//         {shuffled.map((opt, index) => {
//           return (
//             <button key={index} onClick={() => handleAnswerSelection(opt)}>
//               {opt}
//             </button>
//           );
//         })}
//       </div> */}
//       <div>
//         {/* {questions[qstnNumber].incorrect_answers.map((answer, index) => (
//           <button key={index} onClick={() => handleAnswerSelection(answer)}>
//             {answer}
//           </button>
//         ))}
//         <button
//           onClick={() =>
//             handleAnswerSelection(questions[qstnNumber].correct_answer)
//           }
//         >
//           {questions[qstnNumber].correct_answer}
//         </button> */}
//         {shuffled.map((opt, index) => {
//           return (
//             <button key={index} onClick={() => handleAnswerSelection(opt)}>
//               {opt}
//             </button>
//           );
//         })}
//       </div>
//       {selectedAnswer && (
//         <div>
//           <p>{JSON.stringify(correct)}</p>
//         </div>
//       )}
//       {qstnNumber + 1 === questions.length ? (
//         <button onClick={viewResults}>Submit</button>
//       ) : (
//         <button onClick={changeQuestion}>Next</button>
//       )}
//     </Box>
//   }
// </>;
