import { createContext, useContext, useReducer, useState } from "react";
import { noteReducer } from "../reducers/noteReducer";

const NoteContext = createContext();

const NoteProvider = ({children}) => {
    const [value, setValue] = useState('');
    const [noteState, noteDispatch] = useReducer(noteReducer, {
        notes: [],
    });
    
    return (
        <NoteContext.Provider value={{noteState, noteDispatch, value, setValue}}>{children}</NoteContext.Provider>
    )
}

const useNotes = () => useContext(NoteContext);

export {useNotes, NoteProvider};
