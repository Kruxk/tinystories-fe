import Axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectPrompts } from "./selectors";

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
  try {
    const response = await Axios.post(`${apiUrl}/prompts/new`, {
      userId,
      description,
      name,
    });
    console.log("response is:", response);
  } catch (e) {
    console.log(e);
  }
};

export const postStory = (description, name, promptId, userId) => async (
  dispatch,
  getState
) => {
  try {
    const response = await Axios.post(`${apiUrl}/stories/new`, {
      description,
      name,
      promptId,
      userId,
    });
    console.log("response is:", response);
  } catch (e) {
    console.log(e);
  }
};
