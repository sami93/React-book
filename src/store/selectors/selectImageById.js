const selectImageById = (state, id) => {
  if (id === undefined) return;
  return state.find(x => x.isbn === id);
};

export default selectImageById;
