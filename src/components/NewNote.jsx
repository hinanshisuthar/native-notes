import { useNotes } from "../context/notes-context";
import "../styles/new-note.css";
import { DowndownMenuTags, DropdownMenuPriority } from "./DropdownMenu";

const NewNote = () => {
  const { input, setInput, noteHandler, noteAlreadyExists } = useNotes();

  return (
    <div className="editor-con" id={input._id} >
      <div className="note-input-con flex-col-sb p-1" style={{backgroundColor: input.bgColor}}>
        <div className="flex-row-start">
          <span className="mx-sm flex-col-center">
            <h5 className="m-sm">Tags</h5>
            <DowndownMenuTags />
          </span>
          <span className="mx-sm">
            <label className="m-sm mt-1 flex-col-sb">
              <h5>Color</h5>
              <input
                type="color"
                name="card-color"
                id="card-color"
                className="m-sm"
                value={input.bgColor}
                onChange={(e) =>
                  setInput({ ...input, bgColor: e.target.value })
                }
              />
            </label>
          </span>
        </div>

        <DropdownMenuPriority />

        <h5 className="m-sm">Note:</h5>

        <textarea
          className="note-editor text-bold"
          type="text"
          placeholder="Start writing..."
          value={input.content}
          onChange={(e) => setInput({ ...input, content: e.target.value })}
        />
      </div>

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
