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
  if (state.length) {
    let storiesFromLocalState = [];
    state.forEach((prompt) => {
      prompt.stories.forEach((story) => {
        if (story.userId === userId) {
          storiesFromLocalState.push({ ...story });
        }
      });
    });
    dispatch(fetchSucces(storiesFromLocalState));
  } else {
    try {
      const response = await Axios.get(`${apiUrl}/stories/user/${userId}`);
      dispatch(fetchSucces(response.data));
    } catch (e) {
      console.log(e);
    }
  }
};
export const filterStoryFromLocalState = (storyId) => async (
  dispatch,
  getState
) => {
  const stories = selectStories(getState());
  const newStories = stories.filter((story) => story.id !== storyId);
  dispatch(fetchSucces(newStories));
};

export const deleteStory = (id) => async (dispatch, getState) => {
  const token = selectToken(getState());
  const prompt = selectSinglePrompt(getState());
  const user = selectUser(getState());
  const stories = selectStories(getState());

  if (token === null) return;
  try {
    const response = await Axios.delete(`${apiUrl}/stories/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response", response);
    await dispatch(getPrompts());
    dispatch(getSinglePrompt(prompt.id));
    if (stories.length) {
      if (stories[0].userId === user.id) {
        dispatch(filterStoryFromLocalState(id));
      }
    }
  } catch (e) {
    console.log(e);
  }
};
