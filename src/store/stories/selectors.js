export const selectStories = (state) => state.stories;

export const selectStoryById = (id) => (state) => {
  const stories = state.prompts.all.reduce((total, prompt) => {
    return [...total, ...prompt.stories];
  }, []);
  return stories.find((story) => story.id === parseInt(id));
};
