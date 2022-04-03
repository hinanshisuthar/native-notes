import { Filters, NewNote } from "../components";
import { NoteList } from "../components/NoteList";

const HomeDisplay = () => {
  return (
    <div>
      <Filters />
      <NewNote />
      <NoteList />
    </div>
  );
};

export { HomeDisplay };
