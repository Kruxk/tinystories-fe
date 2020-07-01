import { combineReducers } from "redux";
import prompts from "./prompts/reducer";
import user from "./user/reducer";
import stories from "./stories/reducer";

export default combineReducers({
  prompts,
  user,
  stories,
});
