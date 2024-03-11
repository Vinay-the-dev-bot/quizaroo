import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Quiz from "../Pages/Quiz";
import LeaderBoard from "../Pages/LeaderBoard";

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </>
  );
}

export default MainRoute;
