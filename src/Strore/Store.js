import { createStore } from "redux";

const initialState = {
  name: "",
  questions: [],
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, name: action.payload };
    case "Questions":
      return { ...state, questions: action.payload };
    case "Correct":
      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
