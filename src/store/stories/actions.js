import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectStories } from "./selectors";

export const STORE_STORIES = "STORE_STORIES";

export const fetchSucces = (stories) => {
  return {
    type: STORE_STORIES,
    payload: stories,
  };
};

export const fetchStories = () => async (dispatch, getState) => {
  const currentState = selectStories(getState());
  //   console.log(currentState);
  try {
    const res = await axios.get(`${apiUrl}/stories`);

    if (currentState.length !== res.data.length) {
      dispatch(fetchSucces(res.data));
    }
  } catch (error) {
    console.log(error);
  }
};
