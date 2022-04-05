const noteReducer = (noteState, { type, payload }) => {
  switch (type) {
    case "ADD_NOTES":
      return { ...noteState, notes: payload };
    case "TRASH_NOTE":
      return {
        ...noteState,
        notes: payload.notes,
        trash: [...noteState.trash, { ...payload.trash }],
      };
    default:
      return noteState;
  }
};

export { noteReducer };
