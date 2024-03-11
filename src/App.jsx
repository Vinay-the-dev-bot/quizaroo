import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute/MainRoute";
import { Provider } from "react-redux";
import store from "./Strore/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MainRoute />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
