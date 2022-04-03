import { useNotes } from "../context/notes-context";
import { NoteCard } from "./NoteCard";

const NoteList = () => {
  const { noteState } = useNotes();
  return (
    <div>
      {noteState.notes.length === 0 ? (
        <div className="center">
          <h3 className="m-md">No notes to display</h3>
        </div>
      ) : (
        <div className="flex-row-start-wrap">
          {noteState.notes.map((note, index) => {
            return <NoteCard notes={note} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export { NoteList };
