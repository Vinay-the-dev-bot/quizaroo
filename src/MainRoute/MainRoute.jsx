import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Quiz from "../Pages/Quiz";
import LeaderBoard from "../Pages/LeaderBoard";
import Results from "../Pages/Results";

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default MainRoute;
