import Axios from "axios";
import { apiUrl } from "../../config/constants";

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
  try {
    const response = await Axios.get(`${apiUrl}/prompts/${id}`);
    dispatch(storeSinglePrompt(response.data));
  } catch (e) {
    console.log(e);
  }
};
