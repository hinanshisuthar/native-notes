import { useNotes } from "../context/notes-context";
import { categorizedNotes } from "../filters/categorisedProducts";
import { sortedNotes } from "../filters/sort";
import { NoteCard } from "./NoteCard";

const NoteList = ({ notes }) => {
  const {
    search,
    noteState: { sortBy, filterCategories },
  } = useNotes();
  const { urgent, intermediate, trivial } = filterCategories;
  const getSearchedNotes = notes.filter((note) => {
    if (search === "") {
      return note;
    } else if (note.tags[0].toLowerCase().includes(search.toLowerCase())) {
      return note;
    }
  });

  const getSortedNotes = sortedNotes(getSearchedNotes, sortBy);
  const getCategorisedNotes = categorizedNotes(
    getSortedNotes,
    urgent,
    intermediate,
    trivial
  );

  return (
    <div className="pl-md">
      {getCategorisedNotes?.length === 0 ? (
        <div className="center">
          <h3 className="m-md">No notes to display</h3>
        </div>
      ) : (
        <div className="flex-row-start-wrap">
          {getCategorisedNotes?.map((note, index) => {
            return <NoteCard notes={note} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export { NoteList };
