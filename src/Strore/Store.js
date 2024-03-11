import { applyMiddleware, createStore } from "redux";
import thunk from "thunk";

const initialState = {
  name: "",
  questions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, name: action.payload };
    case "Questions":
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
