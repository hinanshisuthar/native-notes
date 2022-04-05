import {
  BsPin,
  BsPalette,
  BsTrash,
  MdLabelOutline,
  MdOutlineArchive,
} from "./icons";
import "../styles/note-card.css";
import { useNotes } from "../context/notes-context";
import { moveToTrash } from "../operations/noteOperations/deleteNoteOperation";
import { encodedToken } from "../utils/token";

const NoteCard = ({ notes }) => {
  const { setInput, noteDispatch } = useNotes();

  const editNote = () => {
    setInput(notes);
  };

  const trashNote = async (notes) => {
    try {
      const { data, status } = await moveToTrash(notes, encodedToken);

      if (status === 200) {
        noteDispatch({
          type: "TRASH_NOTE",
          payload: { notes: data.notes, trash: notes },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="note px-2 py-1 mx-2 my-1" key={notes._id}>
      <div className="note-header flex-row-start p-sm">
        <BsPin size={21} className="icon" />
        <small className="note-label ml-auto text-bold">{notes.tags}</small>
      </div>
      <div
        className="p-sm"
        style={{ cursor: "pointer" }}
        onClick={() => editNote()}
      >
        {notes.content}
      </div>

      <div className="flex-row-sb p-sm">
        <small className="text-bold">{notes.creationTime}</small>
        <div>
          <BsPalette size={22} className="icon" />
          <MdLabelOutline size={22} className="icon" />
          <MdOutlineArchive size={22} className="icon" />
          <BsTrash
            size={22}
            className="icon"
            onClick={() => trashNote(notes)}
          />
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
