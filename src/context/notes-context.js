import { createContext, useContext, useReducer, useState } from "react";
import { noteReducer } from "../reducers/noteReducer";
import { v4 as uuidv4 } from "uuid";
import { addNoteOperation } from "../operations/noteOperations/addNoteOperation";
import { encodedToken } from "../utils/token";
import { editNoteOperation } from "../operations/noteOperations/editNoteOperation";
import { useEffect } from "react";
import { getNoteOperation } from "../operations/noteOperations/getNoteOperation";

const NoteContext = createContext();

const initalState = {
  _id: '',
  content: "",
  backgroundColor: "red",
  tag: [],
};

const NoteProvider = ({ children }) => {
  const [input, setInput] = useState(initalState);
  const [noteState, noteDispatch] = useReducer(noteReducer, {
    notes: [],
  });
  const noteAlreadyExists = noteState.notes?.find(
    (note) => note._id === input._id
  );
    // console.log(noteAlreadyExists);

  const noteHandler = async () => {
    if (noteAlreadyExists) {
      try {
        const { data, status } = await editNoteOperation(
          {
            ...noteAlreadyExists,
            title: input.content.trim(),
            creationTime: new Date().toLocaleString(),
            tags: "tag name updated",
          },
          encodedToken
        );

        if (status === 201) {
          noteDispatch({
            type: "ADD_NOTES",
            payload: data.notes,
          });
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const { data, status } = await addNoteOperation(
          {
            ...input,
            creationTime: new Date().toLocaleString(),
            tags: "tag 1",
          },
          encodedToken
        );

        if (status === 201) {
          noteDispatch({ type: "ADD_NOTES", payload: data.notes });
        }
      } catch (err) {
        console.error(err);
      }
    }
    setInput(initalState);
  };

  return (
    <NoteContext.Provider
      value={{
        noteState,
        noteDispatch,
        input,
        setInput,
        noteHandler,
        noteAlreadyExists,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => useContext(NoteContext);

export { useNotes, NoteProvider };
