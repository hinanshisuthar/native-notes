import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { noteReducer } from "../reducers/noteReducer";
import { addNoteOperation } from "../operations/noteOperations/addNoteOperation";
import { encodedToken } from "../utils/token";
import { editNoteOperation } from "../operations/noteOperations/editNoteOperation";

const NoteContext = createContext();

const formInputs = {
  content: "",
  tags: [],
  dueIn: [],
  bgColor: "",
};

const NoteProvider = ({ children }) => {
  const [input, setInput] = useState(formInputs);
  const [tags, setTags] = useState(["", "work", "health", "chores"]);
  const [search, setSearch] = useState("");
  const dueInOptions = ["", "urgent", "intermediate", "trivial"];
  const [dueIn, setDueIn] = useState(dueInOptions);

  const getNotesFromLocal = JSON.parse(localStorage.getItem("notes"));

  const [noteState, noteDispatch] = useReducer(noteReducer, {
    notes: [] || getNotesFromLocal,
    trash: [],
    archives: [],
    sortBy: "",
    filterCategories: { urgent: false, intermediate: false, trivial: false },
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteState.notes));
  }, [noteState.notes]);

  const noteAlreadyExists = noteState.notes?.find(
    (note) => note._id === input._id
  );

  const noteHandler = async () => {
    if (noteAlreadyExists) {
      try {
        const { data, status } = await editNoteOperation(
          {
            ...noteAlreadyExists,
            content: input.content,
            creationTime: new Date().toLocaleString(),
            tags: input.tags,
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
            tags: input.tags,
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
    setInput(formInputs);
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
        formInputs,
        tags,
        setTags,
        search,
        setSearch,
        dueIn,
        setDueIn,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => useContext(NoteContext);

export { useNotes, NoteProvider };
