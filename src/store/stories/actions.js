import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectStories } from "./selectors";
import { selectToken } from "../user/selectors";
import Axios from "axios";
import { getPrompts, getSinglePrompt } from "../prompts/actions";
import { selectSinglePrompt } from "../prompts/selectors";

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

export const deleteStory = (id) => async (dispatch, getState) => {
  //console.log("deleting story with id:", id);
  const token = selectToken(getState());
  const prompt = selectSinglePrompt(getState());

  if (token === null) return;
  try {
    const response = await Axios.delete(`${apiUrl}/stories/delete/${id}`);
    console.log("response", response);
    await dispatch(getPrompts());
    dispatch(getSinglePrompt(prompt.id));
  } catch (e) {
    console.log(e);
  }
};
