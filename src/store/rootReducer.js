import { combineReducers } from "redux";
import prompts from "./prompts/reducer";
import user from "./user/reducer";

export default combineReducers({
  prompts,
  user,
});
