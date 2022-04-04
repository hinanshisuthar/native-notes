import { useNotes } from "../context/notes-context";
import "../styles/new-note.css";

const NewNote = () => {
  const { input, setInput, noteHandler, noteAlreadyExists } = useNotes();

  return (
    <div className="editor-con center" id={input._id}>
      <textarea
        className="note-editor text-bold"
        type="text"
        placeholder="Start writing..."
        value={input.content}
        onChange={(e) => setInput({ ...input, content: e.target.value })}
      />
      {input.content === "" ? (
        <button
          className="btn btn-secondary m-md"
          onClick={noteHandler}
          disabled
        >
          {noteAlreadyExists ? "Save" : "Add"}
        </button>
      ) : (
        <button className="btn btn-secondary m-md" onClick={noteHandler}>
          {noteAlreadyExists ? "Save" : "Add"}
        </button>
      )}
    </div>
  );
};

export { NewNote };
