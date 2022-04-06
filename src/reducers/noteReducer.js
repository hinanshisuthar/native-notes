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
    case "ADD_TO_ARCHIVE":
      return { ...noteState, notes: payload.notes, archives: payload.archives };
    case "DELETE_FROM_ARCHIVE":
      return {
        ...noteState,
        archives: payload.archives,
        trash: [...noteState.trash, { ...payload.trash }],
      };
    default:
      return noteState;
  }
};

export { noteReducer };
