import axios from "axios";

export const url = "https://opentdb.com/api.php";
// https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple
export const getQuestions = (questions, diff, category) => {
  return async (dispatch) => {
    dispatch({ type: "Questions", payload: { isLoading: true } });
    try {
      const response = await axios.get(
        `${url}?amount=${questions}&difficulty=${diff}&category=${category}&type=multiple`
      );
      console.log(response);
      dispatch({
        type: GET_RESTAURANTS_SUCCESS,
        payload: { isLoading: false, restaurants: response.data },
      });
    } catch (error) {
      dispatch({
        type: GET_RESTAURANTS_FAILURE,
        payload: { isLoading: false, restaurants: [], isError: true },
      });
    }
  };
};

export const userName = (name) => {
  return async (dispatch) => {
    dispatch({ type: "name", payload: { name: name } });
  };
};
