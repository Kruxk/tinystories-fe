export const selectPrompts = (state) => state.prompts.all;

export const selectSinglePrompt = (state) => state.prompts.single;

export const selectPromptById = (id) => (state) => {
  return state.prompts.all.find((prompt) => prompt.id === id);
};
