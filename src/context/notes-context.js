import { createContext, useContext, useReducer, useState } from "react";
import { noteReducer } from "../reducers/noteReducer";
import { v4 as uuidv4 } from "uuid";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [input, setInput] = useState({
    id: uuidv4(),
    content: "",
    backgroundColor: "red",
    creationTime: `${new Date().toLocaleString()}`,
    tag: "Tag 1",
    isPinned: false,
  });
  const [showEditor, setShowEditor] = useState(false);
  const [noteButton, setNoteButton] = useState("Add");

  const noteHandler = (e) => {
    {
      noteButton === "Add"
        ? (noteDispatch({ type: "ADD_NOTES", payload: input }), setInput(""))
        : (noteDispatch({ type: "EDIT_NOTES", payload: input }),
          setInput(""),
          setNoteButton("Add"));
    }
  };

  const [noteState, noteDispatch] = useReducer(noteReducer, {
    notes: [],
  });

  return (
    <NoteContext.Provider
      value={{
        noteState,
        noteDispatch,
        input,
        setInput,
        noteHandler,
        showEditor,
        setShowEditor,
        noteButton,
        setNoteButton,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => useContext(NoteContext);

export { useNotes, NoteProvider };
