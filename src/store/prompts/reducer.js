const initialState = {
  all: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "STORE_PROMPTS":
      return { ...state, all: [...payload] };
    default:
      return state;
  }
};
