const sortedNotes = (notes, sortBy) => {
  if (sortBy === "CREATION_TIME_OLDER")
    return [...notes].sort((a, b) => new Date(a.creationTime) - new Date(b.creationTime))
  else if (sortBy === "CREATION_TIME_NEWER")
    return [...notes].sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));
  return notes;
};

export { sortedNotes };
