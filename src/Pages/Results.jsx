import { Center, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { url } from "../Strore/actions";

function Results() {
  const store = useSelector((store) => store);
  useEffect(async () => {
    console.log("SaveResults");
    const data = await axios.post(`${url}results`, {
      method: "POST",
      Headers: {
        "content-type": "application/json",
      },
      Body: JSON.stringify({ name: store.name, score: store.score }),
    });
    console.log(data);
  }, []);
  return (
    <>
      <p>{JSON.stringify(store.name)}</p>
      <p>{JSON.stringify(store.score)}</p>
      <Text fontSize={"50px"} textAlign={"center"}>
        You Scored {store.score} Marks
      </Text>
    </>
  );
}

export default Results;
