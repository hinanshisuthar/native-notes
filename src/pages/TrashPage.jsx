import { Aside } from "../components/Aside";
import { Navbar } from "../components/Navbar";
import { NoteList } from "../components/NoteList";
import { BsTrash } from "../components/icons";
import { useNotes } from "../context/notes-context";

const TrashPage = () => {
  const {
    noteState: { trash },
  } = useNotes();

  return (
    <>
      <Navbar />
      <div className="grid grid-20-80">
        <Aside />
        <section className="px-1 py-2">
          <div className="flex-row-sb pr-2 mr-1">
            <h3 className="px-2">Trashed Notes</h3>
            <BsTrash size={20} />
          </div>
          <div>
            <NoteList notes={trash} />
          </div>
        </section>
      </div>
    </>
  );
};

export { TrashPage };
