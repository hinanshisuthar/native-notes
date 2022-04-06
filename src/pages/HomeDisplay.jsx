import { NewNote } from "../components";
import { NoteList } from "../components/NoteList";
import { useNotes } from "../context/notes-context";

const HomeDisplay = () => {
  const {
    noteState: { notes },
  } = useNotes();
  return (
    <div className="p-2">
      <NewNote />
      <NoteList notes={notes} />
    </div>
  );
};

export { HomeDisplay };
