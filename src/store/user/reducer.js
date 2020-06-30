import { LOG_OUT, LOGIN_SUCCES } from "./actions";

const initialState = {
  token: null,
  name: null,
  email: null,
  picture: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCES:
      return { ...state, ...payload };
    case LOG_OUT:
      return { ...state, token: null };
    default:
      return state;
  }
};
