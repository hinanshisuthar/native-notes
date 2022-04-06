import { useNotes } from "../context/notes-context";
import { NoteCard } from "./NoteCard";

const NoteList = ({ notes }) => {
  const { search } = useNotes();
  const getSearchedNotes = notes.filter((note) => {
    if (search === "") {
      return note;
    } else if (note.tags[0].toLowerCase().includes(search.toLowerCase())) {
      return note;
    }
  });

  return (
    <div className="pl-md">
      {getSearchedNotes?.length === 0 ? (
        <div className="center">
          <h3 className="m-md">No notes to display</h3>
        </div>
      ) : (
        <div className="flex-row-start-wrap">
          {getSearchedNotes?.map((note, index) => {
            return <NoteCard notes={note} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export { NoteList };
