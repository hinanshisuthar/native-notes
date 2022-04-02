import {Filters} from '../components/Filters';
import { NewNote } from '../components/NewNote';
import { useNotes } from '../context/notes-context';
import {NoteCard} from '../components/NoteCard'

const HomeDisplay = () => {
  const {noteState} = useNotes();

    return (
        <div>
          <Filters />
            <NewNote />
            {(noteState.notes.length === 0 ) ? (
                <div className="center">
                    <h3 className="m-md">No notes to display</h3>
                </div>
            ) : <div className="flex-row-start-wrap">{(noteState.notes.map((notes) => {
              return <
                NoteCard notes={notes} id={notes._id}/>
          }))}</div>

            
            }
        </div>
    )
}

export {HomeDisplay};