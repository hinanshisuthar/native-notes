const categorizedNotes = (notes, urgent, intermediate, trivial) => {
  const list = [];
  if (urgent === false && intermediate === false && trivial === false)
    return notes;
  if (urgent) {
    let newNotesList = notes.filter(
      (note) => "urgent" === note.dueIn[0].toLowerCase()
    );

    list.push(...newNotesList);
  }
  if (intermediate) {
    let newNotesList = notes.filter(
      (note) => "intermediate" === note.dueIn[0].toLowerCase()
    );

    list.push(...newNotesList);
  }
  if (trivial) {
    let newNotesList = notes.filter(
      (note) => "trivial" === note.dueIn[0].toLowerCase()
    );

    list.push(...newNotesList);
  }

  return list;
};

export { categorizedNotes };
