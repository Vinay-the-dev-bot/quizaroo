import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute/MainRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
