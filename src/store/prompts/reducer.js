const initialState = {
  all: [],
  single: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "STORE_PROMPTS":
      return { ...state, all: [...payload] };
    case "STORE_SINGLE_PROMPT":
      return { ...state, single: { ...payload } };
    default:
      return state;
  }
};
