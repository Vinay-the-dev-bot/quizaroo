import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../Strore/actions";

function LeaderBoard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}leaderboard`);
        let results = response.data.leaderboard.sort((a, b) => {
          return b.score - a.score;
        });
        console.log("Results : ", results);
        setLeaderboard(response.data.leaderboard);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="leads">
      <p className="boardText"> Leaderboard</p>
      {leaderboard &&
        leaderboard.map((lead, index) => {
          return (
            <div className="leaderboard">
              <p>{index + 1}</p>
              <p>{lead.name}</p>
              <p>{lead.score}</p>
            </div>
          );
        })}
    </div>
  );
}

export default LeaderBoard;
