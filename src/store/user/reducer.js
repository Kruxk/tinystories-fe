import { LOG_OUT, LOGIN_SUCCES, UPDATE_PIC } from "./actions";

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
    case UPDATE_PIC:
      return { ...state, picture: payload };
    case LOG_OUT:
      return { ...initialState };
    default:
      return state;
  }
};
