import { useSelector } from "react-redux";

function Results() {
  const store = useSelector((store) => store);
  return <>{JSON.stringify(store)}</>;
}

export default Results;
