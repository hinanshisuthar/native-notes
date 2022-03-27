import {Filters} from '../components/Filters';
import {NewNote} from '../components/NewNote';

const HomeDisplay = () => {
    return (
        <div>
          <Filters />
          <NewNote />
        </div>
    )
}

export {HomeDisplay};