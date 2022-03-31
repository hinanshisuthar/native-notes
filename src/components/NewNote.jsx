import ReactQuill from 'react-quill';
import { useNotes } from '../context/notes-context';
import '../styles/new-note.css'

const NewNote = () => {
    const {value, setValue, noteDispatch} = useNotes();
    const addNoteHandler = (e) => {
        noteDispatch({type: 'ADD_NOTES', payload: {value}});
        setValue('')
    }   
    return (
      <div className='editor-con center'>
        <ReactQuill
          value={value}
          onChange={(value) => setValue(value)}
          placeholder={"Start writing..."}
          className="editor"
        />
        <button className='btn btn-secondary m-md' onClick={addNoteHandler}>Add</button>
      </div>
    )
}

export {NewNote};