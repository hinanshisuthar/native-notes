import {
  BsPin,
  BsPalette,
  BsTrash,
  MdLabelOutline,
  MdOutlineArchive,
  MdOutlineUnarchive,
} from "./icons";
import "../styles/note-card.css";
import { useNotes } from "../context/notes-context";
import { moveToTrash } from "../operations/noteOperations/deleteNoteOperation";
import { addToArchiveOperation } from "../operations/archiveOperations/addToArchiveOperation";
import { unarchiveNote } from "../operations/archiveOperations/unarchiveNote";
import { deleteFromArchive } from "../operations/archiveOperations/deleteFromArchive";
import { encodedToken } from "../utils/token";

const NoteCard = ({ notes }) => {
  const {
    setInput,
    noteDispatch,
    noteState: { archives, trash },
  } = useNotes();
  const inArchivesAlready = archives?.find(
    (archivedNote) => archivedNote._id === notes._id
  );

  const inTrashAlready = trash?.find(
    (trashedNote) => trashedNote._id === notes._id
  );

  const editNote = () => {
    setInput(notes);
  };

  const trashNote = async (notes) => {
    try {
      const { data, status } = await moveToTrash(notes, encodedToken);

      if (status === 200 || status === 201) {
        noteDispatch({
          type: "TRASH_NOTE",
          payload: { notes: data.notes, trash: notes },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addToArchive = async (notes) => {
    try {
      const { data, status } = await addToArchiveOperation(notes, encodedToken);
      if (status === 200 || status === 201) {
        noteDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { notes: data.notes, archives: data.archives },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const unArchiveNote = async (notes) => {
    try {
      const { data, status } = await unarchiveNote(notes, encodedToken);
      if (status === 200 || status === 201) {
        noteDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { notes: data.notes, archives: data.archives },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFromArchiveFunc = async (notes) => {
    console.log("entering the loop");
    try {
      const { data, status } = await deleteFromArchive(notes, encodedToken);

      if (status === 200 || status === 201) {
        noteDispatch({
          type: "DELETE_FROM_ARCHIVE",
          payload: { archives: data.archives, trash: notes },
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

          {inArchivesAlready ? (
            <MdOutlineUnarchive
              size={22}
              className="icon"
              onClick={() => unArchiveNote(notes)}
            />
          ) : (
            <MdOutlineArchive
              size={22}
              className="icon"
              onClick={() => addToArchive(notes)}
            />
          )}
          <BsTrash
            size={22}
            className="icon"
            onClick={() =>
              inArchivesAlready ? deleteFromArchiveFunc(notes) : trashNote(notes)
            }
          />
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
