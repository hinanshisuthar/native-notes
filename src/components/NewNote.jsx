import ReactQuill from "react-quill";
import { useState } from "react";
import { useNotes } from "../context/notes-context";
import "../styles/new-note.css";

const NewNote = () => {
  const {
    input,
    setInput,
    noteHandler,
    noteButton,
    noteAlreadyExists,
  } = useNotes();
  const inputContent = input.content;

  // const noteExists = noteState.notes.filter((note) => note.id !== input.id);
  // console.log(noteExists);

  return (
    <div className="editor-con center" id={input.id}>
      <ReactQuill
        value={inputContent}
        onChange={(inputContent) =>
          setInput({ ...input, content: inputContent })
        }
        placeholder={"Start writing..."}
        className="editor"
      />
      <button className="btn btn-secondary m-md" onClick={noteHandler}>
        {noteAlreadyExists ? "Save" : "Add"}
      </button>
    </div>
  );
};

export { NewNote };
