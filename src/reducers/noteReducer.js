const noteReducer = (noteState, { type, payload }) => {
  switch (type) {
    case "ADD_NOTES":
      return { ...noteState, notes: payload };
    case "EDIT_NOTES":
      return {
        ...noteState,
        notes: noteState.notes.map((item) =>
          item.id === payload.id ? { ...payload } : null
        ),
      };
    default:
      return noteState;
  }
};

export { noteReducer };
