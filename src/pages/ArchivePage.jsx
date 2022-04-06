import { Aside } from "../components/Aside";
import { Navbar } from "../components/Navbar";
import { BsTrash } from "../components/icons";
import { useNotes } from "../context/notes-context";
import { NoteList } from "../components/NoteList";

const ArchivePage = () => {
  const {
    noteState: { archives },
  } = useNotes();

  return (
    <>
      <Navbar />
      <div className="grid grid-20-80">
        <Aside />
        <section className="px-1 py-2">
          <div className="flex-row-sb pr-2 mr-1">
            <h3 className="px-2">Archived Notes</h3>
            <BsTrash size={20} />
          </div>
          <div>
            <NoteList notes={archives} />
          </div>
        </section>
      </div>
    </>
  );
};

export { ArchivePage };
