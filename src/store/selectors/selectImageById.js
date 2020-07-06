const selectImageById = (state, id) => {
  if (id === undefined) return;
  return state.find(x => x.id === id);
};

export default selectImageById;
