import Axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectPrompts } from "./selectors";
import { selectToken } from "../user/selectors";
import { selectStories } from "../stories/selectors";
import { filterStoryFromLocalState } from "../stories/actions";

export const storePrompts = (prompts) => ({
  type: "STORE_PROMPTS",
  payload: prompts,
});

export const storeSinglePrompt = (prompt) => ({
  type: "STORE_SINGLE_PROMPT",
  payload: prompt,
});

export const getPrompts = () => async (dispatch, getState) => {
  try {
    const response = await Axios.get(`${apiUrl}/prompts`);
    dispatch(storePrompts(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const getSinglePrompt = (id) => async (dispatch, getState) => {
  const state = selectPrompts(getState());
  if (state.length) {
    const promptFound = state.find((prompt) => prompt.id === parseInt(id));
    dispatch(storeSinglePrompt(promptFound));
  } else {
    try {
      const response = await Axios.get(`${apiUrl}/prompts/${id}`);
      dispatch(storeSinglePrompt(response.data));
    } catch (e) {
      console.log(e);
    }
  }
};

export const postPrompt = (userId, description, name) => async (
  dispatch,
  getState
) => {
  const token = selectToken(getState());
  if (token === null) return;

  try {
    const response = await Axios.post(
      `${apiUrl}/prompts/new`,
      {
        userId,
        description,
        name,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("response is:", response);
  } catch (e) {
    console.log(e);
  }
};

export const postStory = (description, name, promptId, userId) => async (
  dispatch,
  getState
) => {
  const token = selectToken(getState());
  if (token === null) return;

  try {
    const response = await Axios.post(
      `${apiUrl}/stories/new`,
      {
        description,
        name,
        promptId,
        userId,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("response is:", response);
  } catch (e) {
    console.log(e);
  }
};

export const deletePrompt = (id) => async (dispatch, getState) => {
  const token = selectToken(getState());
  const stories = selectStories(getState());
  const storiesToFilter = stories.filter((story) => story.promptId === id);
  if (token === null) return;
  console.log("stories affected:", storiesToFilter);
  try {
    console.log("delete prompt with id", id);
    const response = await Axios.delete(`${apiUrl}/prompts/delete/${id}`);
    console.log("response:", response);
    dispatch(getPrompts());
    if (stories.length) {
      storiesToFilter.forEach((story) =>
        dispatch(filterStoryFromLocalState(story.id))
      );
    }
  } catch (e) {
    console.log(e);
  }
};
