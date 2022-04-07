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
    case "CREATION_TIME_NEWER":
      return { ...noteState, sortBy: type };
    case "CREATION_TIME_OLDER":
      return { ...noteState, sortBy: type };
    case "URGENT":
      return {
        ...noteState,
        filterCategories: {
          ...noteState["filterCategories"],
          urgent: !noteState.filterCategories.urgent,
        },
      };
    case "INTERMEDIATE":
      return {
        ...noteState,
        filterCategories: {
          ...noteState["filterCategories"],
          intermediate: !noteState.filterCategories.intermediate,
        },
      };
    case "TRIVIAL":
      return {
        ...noteState,
        filterCategories: {
          ...noteState["filterCategories"],
          trivial: !noteState.filterCategories.trivial,
        },
      };
    default:
      return noteState;
  }
};

export { noteReducer };
