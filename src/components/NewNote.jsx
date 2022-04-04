import { useNotes } from "../context/notes-context";
import "../styles/new-note.css";

const NewNote = () => {
  const { input, setInput, noteHandler, noteAlreadyExists } = useNotes();

  return (
    <div className="editor-con center" id={input._id}>
      <textarea
        type="text"
        placeholder="Take a note..."
        value={input.content}
        onChange={(e) => setInput({ ...input, content: e.target.value })}
      />
      <button className="btn btn-secondary m-md" onClick={noteHandler}>
        {noteAlreadyExists ? "Save" : "Add"}
      </button>
    </div>
  );
};

export { NewNote };
