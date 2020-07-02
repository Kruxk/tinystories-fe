import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectStories } from "./selectors";
import { selectToken, selectUser } from "../user/selectors";
import Axios from "axios";
import { getPrompts, getSinglePrompt } from "../prompts/actions";
import { selectSinglePrompt, selectPrompts } from "../prompts/selectors";

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
export const getStoriesbyUserId = (userId) => async (dispatch, getState) => {
  const state = selectPrompts(getState());
  console.log("state:", state);
  // if (state.length) {
  //   const stories = state.map((prompt) => {
  //     // return  {...prompt.stories} ;
  //     prompt.stories.forEach((story) => {
  //       return { ...story };
  //     });
  //   });
  //   //console.log("State has length");
  //   console.log("stories:", stories);
  // }
  try {
    const response = await Axios.get(`${apiUrl}/stories/user/${userId}`);
    console.log(" getstoriesbyuserid response is:", response.data);
    dispatch(fetchSucces(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const deleteStory = (id) => async (dispatch, getState) => {
  //console.log("deleting story with id:", id);
  const token = selectToken(getState());
  const prompt = selectSinglePrompt(getState());
  const user = selectUser(getState());

  if (token === null) return;
  try {
    const response = await Axios.delete(`${apiUrl}/stories/delete/${id}`);
    console.log("response", response);
    await dispatch(getPrompts());
    dispatch(getSinglePrompt(prompt.id));
    dispatch(getStoriesbyUserId(user.id));
  } catch (e) {
    console.log(e);
  }
};
