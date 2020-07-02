import { STORE_STORIES } from "./actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case STORE_STORIES:
      return [...payload];

    default:
      return state;
  }
};
