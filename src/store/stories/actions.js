import axios from "axios";
import { apiUrl } from "../../config/constants";

export const STORE_STORIES = "STORE_STORIES";

export const fetchSucces = (stories) => {
  return {
    type: STORE_STORIES,
    payload: stories,
  };
};

export const fetchStories = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${apiUrl}/stories`);
    dispatch(fetchSucces(res.data));
  } catch (error) {
    console.log(error);
  }
};
