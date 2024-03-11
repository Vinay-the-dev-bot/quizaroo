import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  flexbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, url, userName } from "../Strore/actions";
import axios from "axios";
import { useNavigate } from "react-router";

function Home() {
  const state = useSelector((state) => state);
  const [name, setName] = useState("");
  const [noOfQuestions, setNoOfQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    console.log("dnfsdnklsdn");
    // dispatch(userName);
    // dispatch(getQuestions);
    const response = await axios.get(
      `${url}?amount=${noOfQuestions}&difficulty=${difficulty}&category=${category}&type=multiple`
    );
    const qsts = response.data.results;
    console.log(response.data.results);
    dispatch({ type: "Name", payload: name });
    dispatch({ type: "Questions", payload: qsts });
    navigate("/quiz");
  };
  return (
    <>
      {JSON.stringify(state)}

      <FormControl
        onSubmit={handleSubmit}
        width={"40%"}
        flexDirection={"column"}
        display={"flex"}
        gap={"30px"}
        margin={"auto"}
      >
        <Input
          width={"100%"}
          height={"40px"}
          placeholder="Enter Your Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option selected width={"100%"} height={"40px"}>
            Any Difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select
          width={"100%"}
          height={"40px"}
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option selected value="multiple">
            Any Category
          </option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals & Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime & Manga</option>
          <option value="32">Entertainment: Cartoon & Animations</option>
        </select>
        <Input
          width={"100%"}
          height={"40px"}
          min={5}
          max={15}
          placeholder="No of Questions"
          type="number"
          onChange={(e) => setNoOfQuestions(e.target.value)}
          value={noOfQuestions}
        />
        <Button width={"100%"} onClick={handleSubmit} height={"40px"}>
          Start Quiz
        </Button>
      </FormControl>
    </>
  );
}

export default Home;
