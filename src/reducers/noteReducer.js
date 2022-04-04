const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_NOTES":
      return { ...state, notes: payload };
    default:
      return state;
  }
};

export { noteReducer };
