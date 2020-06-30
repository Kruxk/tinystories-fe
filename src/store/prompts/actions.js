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
  console.log("state:", state);
  console.log("id:", id);
  if (state.length) {
    //console.log("using state to find prompt");
    const promptFound = state.find((prompt) => prompt.id === parseInt(id));
    console.log("promptFound:", promptFound);
    dispatch(storeSinglePrompt(promptFound));
  } else {
    try {
      const response = await Axios.get(`${apiUrl}/prompts/${id}`);
      console.log("response:", response.data);
      dispatch(storeSinglePrompt(response.data));
    } catch (e) {
      console.log(e);
    }
  }
};
